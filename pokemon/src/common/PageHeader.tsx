import styled from '@emotion/styled';

const PageHeader = () => {
  return (
    <Header>
      <Title>Pokémon</Title>
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
  font-size: 24px;
  font-weight: bold;
  color: #ffcd03;
`;

export default PageHeader;
