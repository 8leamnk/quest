/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { InputOptions } from '../../constants/types';

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

    &::placeholder,
    &::-moz-placeholder,
    &::-webkit-input-placeholder {
      color: ${({ theme }) => `${theme.colors.gray001}`};
    }
  `,
};

function Input(inputOptions: InputOptions) {
  return <S.Input {...inputOptions} />;
}

export default Input;
