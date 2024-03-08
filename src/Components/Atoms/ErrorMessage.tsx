import styled from 'styled-components';

const S = {
  ErrorMessage: styled.p``,
};

function ErrorMessage({ errorMsg }: { errorMsg: string }) {
  if (errorMsg) {
    return <S.ErrorMessage>{errorMsg}</S.ErrorMessage>;
  }

  return <></>;
}

export default ErrorMessage;
