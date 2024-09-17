const baseURL = `https://pokeapi.co/api/v2`

const doRequest = async (url) => {
    // Se URL estiver no cache, retorno o cache
    // Se não, faço o fetch
    try{
        const response = await fetch(url)
        if (!response.ok){
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
            moves:[],
            types: [],
            species: {}
        },
        Species: {
            evolution_chain: {
                url: ""
            }
        },
        EvolutionChain: {
            evolves_to:[]
        }
    }

    fullData.BaseInfo = await doRequest(`${baseURL}/pokemon/${id}`);
    fullData.Species = await doRequest(`${baseURL}/pokemon-species/${fullData.BaseInfo.name}`)
    fullData.EvolutionChain = await doRequest (fullData.Species.evolution_chain.url)


    // REACT CACHE

    return fullData
}

export default getFullData
