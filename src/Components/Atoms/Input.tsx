/* eslint-disable no-unused-vars */
import styled from 'styled-components';

interface InputOptions {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const S = {
  Input: styled.input`
    width: 100%;
    height: 40px;
    padding: 10px 12px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.while};
    user-select: text;
    border: none;
    outline: none;
  `,
};

function Input(inputOptions: InputOptions) {
  return <S.Input {...inputOptions} />;
}

export default Input;
