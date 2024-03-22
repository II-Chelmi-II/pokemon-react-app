import React from 'react';
import Link from 'next/link';
import { Pokemon } from '../../utils/api/types';

const ServerPage = ({ pokemonList }: { pokemonList?: Pokemon[] }) => {
  const itemsPerPage = 50; 
  const totalPages = pokemonList ? Math.ceil(pokemonList.length / itemsPerPage) : 0; 

  const getPokemonForPage = (page: number): Pokemon[] => {
    if (!pokemonList) return [];
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return pokemonList.slice(startIndex, endIndex);
  };

  return (
    <div>
      <h1>List of Pokémon</h1>
      <ul>
        {pokemonList &&
          getPokemonForPage(1).map((pokemon, index) => (
            <li key={index}>
              {pokemon.name}{' '}
              <Link href={`/server/${pokemon.name}`}>
                <a>Details</a>{' '}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ServerPage;
