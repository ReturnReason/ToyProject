import styled from '@emotion/styled';
import PokeCard from './PokeCard';

const PokeCardList = () => {
  return (
    <List>
      {Array.from({ length: 10 }).map((_, index) => {
        return <PokeCard key={`${index}`}></PokeCard>;
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
