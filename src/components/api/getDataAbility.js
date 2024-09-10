const getDataAbility= async function (name) {
    const url = `https://pokeapi.co/api/v2/ability/${name}`;

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


export default getDataAbility