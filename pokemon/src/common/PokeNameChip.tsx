import styled from '@emotion/styled';

const PokeNameChip = () => {
  return (
    <>
      <Chip>
        <NumberChip>
          <Number>001</Number>
        </NumberChip>
        <ChipText>이상해씨</ChipText>
      </Chip>
    </>
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
`;

const NumberChip = styled.div`
  padding: 4px 6px;
  background-color: yellow;
  border-radius: 50%;
  opacity: 0.5;
`;

const Number = styled.div`
  padding-left: 5px;
`;

const ChipText = styled.label`
  margin: 0 8px;
`;

export default PokeNameChip;
