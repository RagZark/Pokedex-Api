const getDataAbility= async function (name) {
    const url = `https://pokeapi.co/api/v2/ability/${name}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json()

        console.log(json.effect_entries[0].effect);
        

        // return await response.json()
        
        
    
    } catch (error) {
        console.error(error.message);
    }
}

getDataAbility('overgrow')



export default getDataAbility