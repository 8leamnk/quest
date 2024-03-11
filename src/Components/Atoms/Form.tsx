/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { buttonEvent } from '../../constants/types';

interface FormOptions {
  children: React.ReactNode;
  buttonText: string;
  onSubmit: (e: buttonEvent) => void;
}

const S = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  Submit: styled(Button)`
    flex: none;
    cursor: pointer;
  `,
};

function Form({ children, buttonText, onSubmit }: FormOptions) {
  return (
    <S.Form onSubmit={onSubmit}>
      {children}
      <S.Submit onClick={onSubmit}>{buttonText}</S.Submit>
    </S.Form>
  );
}

export default Form;
