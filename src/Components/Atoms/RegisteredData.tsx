import styled from 'styled-components';
import LABELS from '../../constants/values';

const S = {
  Data: styled.div``,
  Title: styled.b``,
  Content: styled.span``,
};

function RegisteredData(inputsData: object[]) {
  return inputsData.map((data: object, index) => {
    Object.entries(data).map(([key, value]) => (
      <S.Data key={`${key}-${index}`}>
        <S.Title>{`${LABELS[key]}: `}</S.Title>
        <S.Content>{value}</S.Content>
      </S.Data>
    ));
  });
}

export default RegisteredData;
