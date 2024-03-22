import { Pokemon } from './types'; 

export const getPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    return [];
  }
};