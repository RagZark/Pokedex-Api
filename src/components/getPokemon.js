import getData from "./getData.js"

// let id = []
// const size = 1302

// for (let i = 1; i <= size; i++) {
//     id.push(i)
// }

// async function getPokemon() {
//     id.forEach(id => {
//         getData(id)
//     })
// };

async function getPokemon(id) {
    const { name, types, sprites, moves, abilities } = await getData(id);
    
    console.log(`Nome: ${name}`);
    console.log(`Tipos:`);
    types.forEach(types => {
        console.log(`- ${types.type.name}`);
    });
    console.log(sprites.other['official-artwork']);
    console.log(moves.length);
    
    
}


getPokemon(1)