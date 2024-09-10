const getData = async function (id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json()    
        
    } catch (error) {
        console.error(error.message);
    }
}

export default getData
