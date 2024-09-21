import useFetchFullData from "./useFetchFullData";
import getFullData from "../api/getFullData";

const pokemonData = (id) =>{
    const{ data: pokemon, error, loading} = useFetchFullData(getFullData, id)
}