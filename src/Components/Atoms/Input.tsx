/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { InputOptions } from '../../constants/types';

const placeholder = css`
  color: ${({ theme }) => `${theme.colors.gray001}`};
`;

const S = {
  Input: styled.input`
    flex: 1;
    height: 40px;
    padding: 10px 12px;
    border-radius: 4px;
    font-family: 'NotoSansKR', sans-serif;
    font-size: ${({ theme }) => `${theme.fontSize.medium}px`};
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
    user-select: text;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      ${placeholder};
    }
    &::-moz-placeholder {
      ${placeholder};
    }
    &::-webkit-input-placeholder {
      ${placeholder};
    }
  `,
};

function Input(inputOptions: InputOptions) {
  return <S.Input {...inputOptions} />;
}

export default Input;
