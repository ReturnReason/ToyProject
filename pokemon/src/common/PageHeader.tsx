import styled from '@emotion/styled';

const PageHeader = () => {
  return (
    <Header>
      <Title>Pokémon</Title>
      <Select>
        <option value="official">Official</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </Select>
    </Header>
  );
};

const Header = styled.nav`
  display: flex;
  padding: 16px 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid #c0c0c0;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 900;
  color: #ffcd03;
  text-shadow: 2px -1px #3864a5, -1px 2px #3864a5, 2px 2px #3864a5, 2px 2px #3864a5;
  margin-top: 3px;
`;

const Select = styled.select`
  display: flex;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #999;
  color: #555;
`;

export default PageHeader;
