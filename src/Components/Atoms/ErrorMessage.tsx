import React from 'react';
import styled from 'styled-components';

const S = {
  ErrorMessage: styled.p`
    color: ${({ theme }) => theme.colors.quaternary};
  `,
};

function ErrorMessage({ errorMsg }: { errorMsg: string }) {
  if (errorMsg) {
    return <S.ErrorMessage>{errorMsg}</S.ErrorMessage>;
  }

  return <></>;
}

export default React.memo(ErrorMessage);
