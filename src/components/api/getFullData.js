/*

// 1.
Aplicar o chache para a função doRequest
recomendo essa lib
https://www.npmjs.com/package/node-cache
Para gravar :
  myCache.set( "URL-DA-API", retornoDaApi, 10000 );
Para ler:
  myCache.get( "URL-DA-API" );
Testar com logs para ver se esta pegando do cache ou do fetch

// 2.
carregar as evoluções de cada  pokemom 
com a funcao getSmallerInfoByName 

// 3.
rever as informações do `getFullData.to_return` 
para ver o que voce usa e o que não usa 
e adicionar apenas o que for usar.
se for usar outra chamada de api, criar uma função para ela.
*/

const baseURL = `https://pokeapi.co/api/v2`;

const doRequest = async (url) => {
  // Se URL estiver no cache, retorno o cache
  // Se não, faço o fetch
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // Salvar a resposta no cache
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const getFullData = async function (id) {
  const baseInfo = await doRequest(`${baseURL}/pokemon/${id}`);
  if (!baseInfo) {
    return null;
  }

  const to_return = {
    id: baseInfo.id,
    name: baseInfo.name,
    abilities: await getAbility(baseInfo),
    moves: baseInfo.moves.map((move) => move.move.name),
    types: baseInfo.types.map((type) => type.type.name),
    pixelImage: baseInfo.sprites.front_default,
    animeImage: baseInfo.sprites.other["official-artwork"].front_default,
    animeShinyImage: baseInfo.sprites.other["official-artwork"].front_shiny,
    evolutions: await getEvolutions(baseInfo),
  };
  myLog(to_return)
};

const getAbility = async (baseInfo) => {
  const abilities = await Promise.all(
    baseInfo.abilities.map(
      async (ability) =>
        await doRequest(`${baseURL}/ability/${ability.ability.name}`).then(
          (response) => {
            return {
              name: ability.ability.name,
              description: response.effect_entries[1].effect,
            };
          },
        ),
    ),
  ).then((values) => {
    return values;
  });
  return abilities;
};

const getEvolutions = async (baseInfo) => {
  const species = await doRequest(
    `${baseURL}/pokemon-species/${baseInfo.name}`,
  );

  let evolutionChain = {};

  if (species?.evolution_chain?.url) {
    const evolutionChainFromApi = await doRequest(species.evolution_chain.url);

    if (evolutionChain) {
      evolutionChain.firstEvolution =
        await Promise.all (evolutionChainFromApi.chain.evolves_to?.map(async (content) => ({
          id: content.species.url.split("/")[6],
          name: content.species.name,
          imageAndTypes: await getSmallerInfoByName(content.species.url.split("/")[6]),
          url: species.evolution_chain.url,
          secondEvolution: await Promise.all(content.evolves_to?.map(async (content) => ({
            id: content.species.url.split("/")[6],
            name: content.species.name,
            imageAndTypes: await getSmallerInfoByName(content.species.url.split("/")[6]),
            url: species.evolution_chain.url
          }))),
        })));
    }
  }
  return evolutionChain;
};

const myLog = (data) => {
  console.log(JSON.stringify(data, null, 4));
};

const getSmallerInfoByName = async (id) => {
  const pokemon = await doRequest(`${baseURL}/pokemon/${id}`)

  return {
    frontDefault: pokemon.sprites?.other["official-artwork"].front_default,
    frontShinyDefault: pokemon.sprites?.other["official-artwork"].front_shiny,
    types: pokemon.types.map((type) => type.type.name),
  };
};

getFullData(1)

export default getFullData