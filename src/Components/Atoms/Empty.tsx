import styled from 'styled-components';

const S = {
  EmptyText: styled.p``,
};

function Empty({ children }: { children: string }) {
  return <S.EmptyText>{children}</S.EmptyText>;
}

export default Empty;
