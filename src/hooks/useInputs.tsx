import { useState } from 'react';
import { changeEvent } from '../constants/types';

function useInputs<T>(initialInputs: T) {
  const [inputs, setInputs] = useState<T>(initialInputs);

  const onChange = (e: changeEvent): void => {
    const { name, value } = e.target;
    setInputs((curState) => ({ ...curState, [name]: value }));
  };

  const onReset = (): void => {
    setInputs((curState) => ({ ...curState, ...initialInputs }));
  };

  return { inputs, onChange, onReset };
}

export default useInputs;
