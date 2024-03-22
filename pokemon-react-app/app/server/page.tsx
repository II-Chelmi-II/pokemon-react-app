import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Pokemon } from '../../utils/api/types'; 

const ServerPage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div>
      <h1>List of Pokémon</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name} {}
            <Link href={`/server/${pokemon.name}`}>
              <a>Details</a> {}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerPage;
