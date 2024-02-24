import React, { useState } from 'react';
import { QuestInputs } from '../constants/types';

function useInputs() {
  const [inputs, setInputs] = useState<QuestInputs>({
    title: '',
    content: '',
    priority: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputs((curState) => ({ ...curState, [name]: value }));
  };

  return { inputs, onChange };
}

export default useInputs;
