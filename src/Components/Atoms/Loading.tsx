import styled from 'styled-components';

const S = {
  Background: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.title};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  `,
};

function Loading() {
  return <S.Background>loading...</S.Background>;
}

export default Loading;
