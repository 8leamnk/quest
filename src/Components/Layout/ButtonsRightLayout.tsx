import React from 'react';
import styled from 'styled-components';

const S = {
  ButtonSection: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,
};

function ButtonsLayout({ children }: { children: React.ReactNode }) {
  return <S.ButtonSection>{children}</S.ButtonSection>;
}

export default ButtonsLayout;
