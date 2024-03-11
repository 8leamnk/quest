/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { buttonEvent } from '../../constants/types';

interface ButtonOptions {
  children: string;
  onClick: (e: buttonEvent) => void;
}

const S = {
  Button: styled.button`
    width: 100px;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    outline: none;
  `,
};

function Button({ children, onClick, ...rest }: ButtonOptions) {
  return (
    <S.Button onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
