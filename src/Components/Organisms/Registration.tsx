/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import Form from '../Molecules/Form';
import Label from '../Atoms/Label';
import Input from '../Atoms/Input';
import {
  StringHashTable,
  changeEvent,
  buttonEvent,
} from '../../constants/types';
import { LABELS } from '../../constants/values';

interface Options {
  inputs: StringHashTable;
  buttonText: string;
  onChange: (e: changeEvent) => void;
  onSubmit: (e: buttonEvent) => void;
}

const S = {
  Inputs: styled.div`
    display: flex;
    align-items: center;
  `,
};

function Registration({ inputs, buttonText, onChange, onSubmit }: Options) {
  if (inputs) {
    return (
      <Form buttonText={buttonText} onSubmit={onSubmit}>
        {Object.entries(inputs).map(([key, value]) => (
          <S.Inputs key={key}>
            <Label htmlFor={LABELS[key]}>{LABELS[key]}</Label>
            <Input
              type="text"
              name={key}
              value={value}
              placeholder={`${LABELS[key]}을(를) 입력하세요.`}
              onChange={onChange}
            />
          </S.Inputs>
        ))}
      </Form>
    );
  }

  return <></>;
}

export default Registration;
