import styled from '@emotion/styled';

const PokeMarkChip = () => {
  return (
    <Chip>
      <Text>Pokémon</Text>
    </Chip>
  );
};

const Chip = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
  padding-top: 4px;
  font-size: 15px;
  margin-left: auto;
  margin-right: 15px;
`;

const Text = styled.label`
  padding: 0 8px;
  font-size: 13px;
`;

export default PokeMarkChip;
