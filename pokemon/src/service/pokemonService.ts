import axios from 'axios';

const remote = axios.create();

// https://pokeapi.co/api/v2/{endpoint}/
// https://pokeapi.co/api/v2/pokemon/{id or name}/

export interface PokemonListResponse {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}
// 포켓몬 리스트 가져오기
export const fetchPokemons = async () => {
  const defaultUrl = 'https://pokeapi.co/api/v2/pokemon';
  const response = await remote.get<PokemonListResponse>(defaultUrl);

  return response.data;
};
