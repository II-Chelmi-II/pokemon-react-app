import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../utils/api/types';

const DetailsPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => setPokemonDetails(data))
        .catch(error => console.error('Error fetching Pokemon details:', error));
    }
  }, [name]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemonDetails.name} Details</h1>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p>ID: {pokemonDetails.id}</p>
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Types: {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
      <p>Order: {pokemonDetails.order}</p>
    </div>
  );
};

export default DetailsPage;
