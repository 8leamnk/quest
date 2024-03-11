import styled from 'styled-components';
import { LABELS } from '../../constants/values';

const S = {
  Section: styled.div`
    width: 240px;
    height: 320px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    border-radius: 4px;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 80px;
    transform: translateY(-50%);
    z-index: 1;
    box-shadow: 3px 6px 9px 0 rgba(0, 0, 0, 0.16);
  `,
  Data: styled.div``,
  Title: styled.b``,
  Content: styled.span``,
};

function RegisteredData({ registeredData }: { registeredData: object[] }) {
  if (registeredData.length > 0) {
    return (
      <S.Section>
        {registeredData.map((data: object, index) =>
          Object.entries(data).map(([key, value]) => (
            <S.Data key={`${key}-${index}`}>
              <S.Title>{`${LABELS[key]}: `}</S.Title>
              <S.Content>{value}</S.Content>
            </S.Data>
          )),
        )}
      </S.Section>
    );
  }

  return <></>;
}

export default RegisteredData;
