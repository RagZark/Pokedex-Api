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
            name: "",
            abilities: [],
            moves: [],
            types: [],
            species: {},
            sprites: {
                frontDefault: null,
                other:{
                    'official-artwork':{
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
                url: ""
            }
        },
        EvolutionChain: {
            evolves_to: {
                specie_name: '',
                evolves_to: {
                    specie_name: ''
                }
            }
        }
    }

    //await doRequest(`${baseURL}/ability/`)

    const baseInfo = fullData.BaseInfo = await doRequest(`${baseURL}/pokemon/${id}`);
    if (baseInfo) {
        fullData.BaseInfo = baseInfo
        fullData.BaseInfo.moves = fullData.BaseInfo.moves.map(move => move.move.name);
        fullData.BaseInfo.types = fullData.BaseInfo.types.map(type => type.type.name);
        fullData.BaseInfo.sprites.frontDefault = fullData.BaseInfo.sprites.front_default;
        fullData.BaseInfo.sprites.other["official-artwork"].frontDefault = fullData.BaseInfo.sprites.other["official-artwork"].front_default;
        fullData.BaseInfo.sprites.other["official-artwork"].frontShiny = fullData.BaseInfo.sprites.other["official-artwork"].front_shiny;

        const abilityName = fullData.Abilities.ability.name = fullData.BaseInfo.abilities.map((ability) => ability.ability.name);

        if (abilityName) {
            const abilityDescription = abilityName.map(async abilityName => await doRequest(`${baseURL}/ability/${abilityName}`).then(response => {
                return response.effect_entries[1].effect
            }));
            fullData.Abilities.ability.description = await Promise.all(abilityDescription).then(values => { return values; });
        }

        const species = fullData.Species = await doRequest(`${baseURL}/pokemon-species/${fullData.BaseInfo.name}`)
        if (species) {
            fullData.Species = species

            if (fullData.Species.evolution_chain?.url) {
                const evolutionChain = fullData.EvolutionChain = await doRequest(fullData.Species.evolution_chain.url)
                if (evolutionChain) {
                    fullData.EvolutionChain = evolutionChain
                    console.log(evolutionChain);
                    
                    // console.log(evolutionChain.chain.evolves_to[0]?.species.name);
                    // console.log(evolutionChain.chain.evolves_to[0]?.evolves_to[0].species.name);
                }
            }
        }
    }



    // REACT CACHE

    return fullData
}

getFullData(5)

export default getFullData
