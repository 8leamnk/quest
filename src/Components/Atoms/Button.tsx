import styled from 'styled-components';

interface ButtonOptions {
  buttonText: string;
  onClick: () => void;
}

const S = {
  Button: styled.button`
    min-width: 100px;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.while};
    background-color: transparent;
    border: none;
    outline: none;
  `,
};

function Button({ buttonText, onClick, ...rest }: ButtonOptions) {
  return (
    <S.Button onClick={onClick} {...rest}>
      {buttonText}
    </S.Button>
  );
}

export default Button;
