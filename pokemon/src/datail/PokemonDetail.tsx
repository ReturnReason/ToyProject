import styled from '@emotion/styled';
import PokeMarkChip from '../common/PokeMarkChip';

const TempImgUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoZEeyzKdjsIIDAz9E69XPROL3WBPLtg0Aw&usqp=CAU`;

const PokemonDetail = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={TempImgUrl} alt="포켓몬" />
      </ImageContainer>
      <Divider />
      <Body>
        <Title>기본 정보</Title>
        <Table>
          <thead></thead>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>1</td>
            </TableRow>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>1</td>
            </TableRow>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>1</td>
            </TableRow>
          </tbody>
        </Table>

        <Title>능력치</Title>
        <Table>
          <thead></thead>
          <tbody>
            <TableRow>
              <TableHeader>hp</TableHeader>
              <td>45</td>
            </TableRow>
            <TableRow>
              <TableHeader>attack</TableHeader>
              <td>49</td>
            </TableRow>
          </tbody>
        </Table>
      </Body>

      <Footer>
        <PokeMarkChip />
      </Footer>
    </Container>
  );
};

const Container = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 16px;
  box-shadow: 1px 1px 2px 2px #eee;
`;

const ImageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  display: block;
  height: 250px;
`;

const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-bottom: 1px solid #ccc;
`;

const Body = styled.section`
  margin: 0 32px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  th,
  td {
    padding: 6px 12px;
  }
`;

const TableRow = styled.tr`
  border-width: 1px 0;
  border-style: solid;
  border-top: 1px solid #f0f0f0;
  border-bottom: none;
`;

const TableHeader = styled.th`
  width: 1px;
  white-space: nowrap;
  text-align: left;
  font-weight: normal;
  color: #999;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  margin-bottom: 5px;
`;

export default PokemonDetail;
