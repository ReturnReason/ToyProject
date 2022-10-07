import styled from '@emotion/styled';
import PokeMarkChip from '../common/PokeMarkChip';
import PokeNameChip from '../common/PokeNameChip';

const TempImgUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoZEeyzKdjsIIDAz9E69XPROL3WBPLtg0Aw&usqp=CAU`;

const PokeCard = () => {
  return (
    <Item>
      <Header>
        <PokeNameChip />
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
