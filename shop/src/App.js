import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { Container, Row, Card, Button, Nav } from 'react-bootstrap';
import styled from 'styled-components';

export const GET_POKEMON_DATA = 'GET_POKEMON_DATA';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_POKEMON_DATA:
      return {
        ...state,
        pokemons: action.pokemons,
        loading: false,
      };
    case GET_POKEMON_DETAIL:
      return;
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const initialState = {
  loading: false,
  pokemons: {},
};

const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/`;

// 포켓몬 이미지 파일 있는 API
const fetchPokemonDetail = async (pokemonName) => {
  try {
    const pokemonDetailUrl = POKEMON_URL + `${pokemonName}`;
    const res = await axios.get(pokemonDetailUrl);
    const detail = res.data;

    return {
      id: detail.id,
      name: detail.name,
      // sprites: detail.sprites['official-artwork']['front_default'],
    };
  } catch (error) {
    return console.error(error);
  }
};

function PokeCard({ dispatch, pokemonName, pokemons }) {
  useEffect(() => {
    (async () => {
      try {
        const pokemonDetail = await fetchPokemonDetail(pokemonName);

        dispatch({
          type: GET_POKEMON_DETAIL,
          data: pokemonDetail,
        });
      } catch (err) {
        dispatch({
          type: ERROR,
        });
        console.error(err);
      }
    })();
  }, [dispatch, pokemonName]);

  if (!pokemonName) return null;

  return (
    <Card key={`번째 `} style={{ width: '18rem' }}>
      <img alt="포켓몬" />
      <Card.Body>
        <Card.Title>{pokemonName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

// 포켓몬 API
const fetchPokemonInfo = async () => {
  try {
    const result = await axios.get(POKEMON_URL);
    return result.data;
  } catch (error) {
    return console.error(error);
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 초기 포켓몬 데이터 받아오기

  useEffect(() => {
    console.log('111');

    (async function fetchPokemon() {
      // 로딩창 만들어주기
      dispatch({
        type: LOADING,
      });

      try {
        const res = await fetchPokemonInfo();

        dispatch({
          type: GET_POKEMON_DATA,
          pokemons: res,
          loading: false,
        });
      } catch (error) {
        dispatch({
          type: ERROR,
        });
      }
    })();
  }, []);

  const { pokemons, loading } = state;

  console.log(loading);
  if (loading) return <div>로딩중</div>;

  return (
    <div className="App">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">PokemonShop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/product">Pokemon</Nav.Link>
        </Nav.Item>
      </Nav>
      <Container>
        <Row>
          {/* // 비동기 데이터 받아오는거보다 더 빨리 실행돼서 오류 발생중 */}
          {pokemons.map((pokemon, idx) => {
            return (
              <PokeCard
                key={`${idx} ${pokemon.name}`}
                dispatch={dispatch}
                pokemonName={pokemon.name}
                pokemons={pokemons}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
