/* eslint-disable no-unused-vars */
import Form from '../Atoms/Form';
import Label from '../Atoms/Label';
import Input from '../Atoms/Input';
import {
  StringHashTable,
  changeEvent,
  buttonEvent,
} from '../../constants/types';
import LABELS from '../../constants/values';

interface Options {
  inputs: StringHashTable;
  buttonText: string;
  onChange: (e: changeEvent) => void;
  onSubmit: (e: buttonEvent) => void;
}

function Registration({ inputs, buttonText, onChange, onSubmit }: Options) {
  if (inputs) {
    return (
      <Form buttonText={buttonText} onSubmit={onSubmit}>
        {Object.entries(inputs).map(([key, value]) => (
          <Label key={key} labelText={LABELS[key]}>
            <Input
              type="text"
              name={key}
              value={value}
              placeholder={`${LABELS[key]}을(를) 입력하세요.`}
              onChange={onChange}
            />
          </Label>
        ))}
      </Form>
    );
  }

  return <></>;
}

export default Registration;
