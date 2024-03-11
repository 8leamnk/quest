/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Button from '../Atoms/Button';
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
    gap: 16px;
  `,
  Decision: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
  Submit: styled(Button)`
    cursor: pointer;
  `,
};

function Form({ children, buttonText, onSubmit }: FormOptions) {
  return (
    <S.Form onSubmit={onSubmit}>
      {children}

      <S.Decision>
        <S.Submit onClick={onSubmit}>{buttonText}</S.Submit>
      </S.Decision>
    </S.Form>
  );
}

export default Form;
