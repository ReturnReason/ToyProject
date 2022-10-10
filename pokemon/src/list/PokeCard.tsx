import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PokeMarkChip from '../common/PokeMarkChip';
import PokeNameChip from '../common/PokeNameChip';

const TempImgUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoZEeyzKdjsIIDAz9E69XPROL3WBPLtg0Aw&usqp=CAU`;

interface PokeCardProps {
  name: string;
}

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  return (
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip name={props.name} />
      </Header>
      <Body>
        <Image src={TempImgUrl} alt="포켓몬" />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  width: 250px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 0 15px #eee;
  padding: 8px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    border: 1px solid #4f68ff60;
    box-shadow: 0 0 15px #4f68ff60;
  }
`;

const Header = styled.section`
  display: flex;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  justify-content-center;
  align-items : center;
  margin: 8px 0;
  flex : 1 1 auto;

`;

const Image = styled.img`
  height: 80%;
  margin: 0 auto;
`;

const Footer = styled.section`
  display: flex;
  flex-direuction: row;
`;

export default PokeCard;
