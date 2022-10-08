import PokeCardList from './PokeCardList';
import { Routes, Route } from 'react-router-dom';
import PokemonDetail from '../datail/PokemonDetail';

const PageNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<PokeCardList />}></Route>
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
};

export default PageNavigator;
