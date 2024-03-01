import React from 'react';
import useInputs from '../hooks/useInputs';
import useValidation from '../hooks/useValidation';
import useRegistration from '../hooks/useRegistration';
import usePriorityQueue from '../hooks/usePriorityQueue';

function Home() {
  const { inputs, onChange } = useInputs();
  const { errorMsg, validate } = useValidation();
  const { registeredData, registerQuest } = useRegistration();
  const { enqueue } = usePriorityQueue();

  const onSubmit = (): void => {
    const element = validate(inputs);

    if (element) {
      registerQuest(element);
      enqueue(element);
    }
  };
  return <>Hello world!</>;
}

export default React.memo(Home);
