const baseURL = `https://pokeapi.co/api/v2`

const doRequest = async (url) => {
    // Se URL estiver no cache, retorno o cache
    // Se não, faço o fetch
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        // Salvar a resposta no cache
        return await response.json()
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

const getFullData = async function (id) {
    let fullData = {
        BaseInfo: {
            id: Number,
            name: "",
            abilities: [],
            moves: [],
            types: [],
            species: {},
            sprites: {
                frontDefault: null,
                other: {
                    'official-artwork': {
                        frontDefault: '',
                        frontShiny: ''
                    }
                }
            }
        },
        Abilities: {
            ability: {
                name: [],
                description: []
            }
        },
        Species: {
            evolution_chain: {
                url: ''
            }
        },
        EvolutionChain: {
            firstEvolution: {
                evoName: [],
                frontDefault: ''
            },
            secondEvolution: {
                evoName: [],
                frontDefault: ''
            }
        }
    }

    const baseInfo = fullData.BaseInfo = await doRequest(`${baseURL}/pokemon/${id}`);
    if (baseInfo) {
        fullData.BaseInfo = baseInfo
        fullData.BaseInfo.name = baseInfo.name
        fullData.BaseInfo.id = baseInfo.id
        fullData.BaseInfo.moves = baseInfo.moves.map(move => move.move.name);
        fullData.BaseInfo.types = baseInfo.types.map(type => type.type.name);
        fullData.BaseInfo.sprites.frontDefault = baseInfo.sprites.front_default;
        fullData.BaseInfo.sprites.other["official-artwork"].frontDefault = baseInfo.sprites.other["official-artwork"].front_default;
        fullData.BaseInfo.sprites.other["official-artwork"].frontShiny = baseInfo.sprites.other["official-artwork"].front_shiny;

        const abilityName = fullData.Abilities.ability.name = baseInfo.abilities.map((ability) => ability.ability.name);

        if (abilityName) {
            const abilityDescription = abilityName.map(async abilityName => await doRequest(`${baseURL}/ability/${abilityName}`).then(response => {
                return response.effect_entries[1].effect
            }));
            fullData.Abilities.ability.description = await Promise.all(abilityDescription).then(values => { return values; });
        }

        const species = fullData.Species = await doRequest(`${baseURL}/pokemon-species/${baseInfo.name}`)
        if (species) {
            fullData.Species = species
            
            if (species.evolution_chain?.url) {
                const evolutionChain = fullData.EvolutionChain = await doRequest(fullData.Species.evolution_chain.url)
                 
                if (evolutionChain) {
                    fullData.EvolutionChain = evolutionChain
                    const haveEvo = evolutionChain.firstEvolution = evolutionChain.chain.evolves_to
                    
                    if (haveEvo.length !== 0) {
                        evolutionChain.firstEvolution.evoName = [];
                        haveEvo?.map(firstEvoName => evolutionChain.firstEvolution.evoName.push(firstEvoName.species.name))

                        evolutionChain.secondEvolution = []
                        const haveSecondEvo = haveEvo.map(content => content)

                        if (haveSecondEvo) {
                            evolutionChain.secondEvolution.evoName = []
                            haveSecondEvo.forEach(secondEvoArray => {
                                secondEvoArray.evolves_to.map(content => evolutionChain.secondEvolution.evoName.push(content.species.name));
                            })
                            if (evolutionChain.secondEvolution.evoName.length === 0) {
                                evolutionChain.secondEvolution.evoName = null
                            }
                        }
                    } else{
                        evolutionChain.firstEvolution.evoName = null
                    }
                }
            }
        }
    }

    // REACT CACHE

    return fullData
}

export default getFullData
