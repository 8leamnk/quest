import styled from 'styled-components';

const S = {
  Strong: styled.strong<{ $isBold?: boolean }>`
    font-weight: ${({ $isBold }) => ($isBold ? 'bold' : 'normal')};
    color: ${({ theme }) => theme.colors.secondary};
  `,
};

function Strong({ isBold, children }: { isBold?: boolean; children: string }) {
  return <S.Strong $isBold={isBold}>{children}</S.Strong>;
}

export default Strong;
