import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

const GET_POKEMON_DATA = 'GET_POKEMON_DATA';
const LOADING = 'LOADING';
const ERROR = 'ERROR';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_POKEMON_DATA:
      const oldData = [...state.pokemons];
      return {
        ...state,
        pokemons: [...oldData, ...action.data],
        loading: false,
      };
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
  pokemons: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const poke = async () => {
      dispatch({ type: LOADING });

      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        dispatch({
          type: GET_POKEMON_DATA,
          data: res.data.results,
        });
      } catch (err) {
        console.error(err);
        dispatch({
          tpye: ERROR,
        });
      }
    };

    poke();
  }, []);

  const { pokemons, loading } = state;
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
          {pokemons.map((pokemon, idx) => {
            return (
              <Card key={`${idx}번째 ${pokemon.name}`} style={{ width: '18rem' }}>
                <img src={`${pokemon.url}`} alt="포켓몬" />
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
