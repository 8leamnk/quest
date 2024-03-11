import styled from 'styled-components';

const S = {
  Title: styled.b`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => `${theme.fontSize.title}px`};
  `,
};

function Title({ children }: { children: string }) {
  return <S.Title>{children}</S.Title>;
}

export default Title;
