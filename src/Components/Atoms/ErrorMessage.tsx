import styled from 'styled-components';

const S = {
  ErrorMessage: styled.p`
    color: #d01c1f;
  `,
};

function ErrorMessage({ errorMsg }: { errorMsg: string }) {
  if (errorMsg) {
    return <S.ErrorMessage>{errorMsg}</S.ErrorMessage>;
  }

  return <></>;
}

export default ErrorMessage;
