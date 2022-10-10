import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { fetchPokemons, PokemonListResponse } from '../service/pokemonService.ts';
import PokeCard from './PokeCard';

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState({
    count: 0,
    next: '',
    results: [],
  });

  useEffect(() => {
    (async () => {
      const pokemons = await fetchPokemons();
      setPokemons(pokemons);
    })();
  }, []);

  return (
    <List>
      {pokemons.results.map((pokemon, index) => {
        return <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name}></PokeCard>;
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default PokeCardList;
