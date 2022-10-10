import styled from '@emotion/styled';

interface PokeNameChipProps {
  name: string;
  id: number;
}

const PokeNameChip = (props: PokeNameChipProps) => {
  const renderNumber = (id: number) => {
    const digits = 3;
    const numberString = id.toString();

    if (numberString.length >= digits) {
      return numberString;
    }

    let result = '';
    for (let i = 0; i < digits - numberString.length; i++) {
      result += '0';
    }

    return `${result}${numberString}`;
  };

  return (
    <>
      <Chip>
        <NumberChip>
          <Number>{renderNumber(props.id)}</Number>
        </NumberChip>
        <ChipText>{props.name}</ChipText>
      </Chip>
    </>
  );
};

const Chip = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
  font-size: 15px;
  overflow: hidden;
  padding-right: 2px;
`;

const NumberChip = styled.div`
  padding: 4px 6px;
  background-color: yellow;
  border-radius: 5px;
`;

const Number = styled.div`
  padding-left: 5px;
`;

const ChipText = styled.label`
  margin: 0 8px;
`;

export default PokeNameChip;
