import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Pokemon } from '../../utils/api/types'; 

const ClientPage = () => {
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
      <h1>Liste de Pokémon (Client)</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name} {}
            <Link href={`/client/${pokemon.name}`}>
              <a>Détails</a> {}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
