/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import ButtonsLayout from '../Layout/ButtonsRightLayout';
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
};

function Form({ children, buttonText, onSubmit }: FormOptions) {
  return (
    <S.Form onSubmit={onSubmit}>
      {children}

      <ButtonsLayout>
        <Button onClick={onSubmit}>{buttonText}</Button>
      </ButtonsLayout>
    </S.Form>
  );
}

export default Form;
