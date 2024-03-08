import React from 'react';
import styled from 'styled-components';

const S = {
  Section: styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Inner: styled.div`
    width: 560px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.while};
  `,
};

function RegistrationLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.Section>
      <S.Inner>{children}</S.Inner>
    </S.Section>
  );
}

export default RegistrationLayout;
