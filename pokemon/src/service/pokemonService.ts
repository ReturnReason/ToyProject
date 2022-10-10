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

interface PokemonDetailResponseType {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface PokemonDetailType {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: string[];
  images: {
    frontDefault: string;
    dreamworldFront: string;
    officialArtworkFront: string;
  };
  baseStats: {
    name: string;
    value: number;
  }[];
}

export const fetchPokemonDetail = async (name: string): Promise<PokemonDetailType> => {
  const pokemoDatailUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const response = await remote.get<PokemonDetailResponseType>(pokemoDatailUrl);
  const detail = response.data;

  return {
    id: detail.id,
    name: detail.name,
    height: detail.height / 10,
    weight: detail.weight / 10,
    types: detail.types.map((item) => {
      return item.type.name;
    }),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamworldFront: detail.sprites.other.dream_world.front_default,
      officialArtworkFront: detail.sprites.other['official-artwork'].front_default,
    },
    baseStats: detail.stats.map((item) => {
      return {
        name: item.stat.name,
        value: item.base_stat,
      };
    }),
  };
};
