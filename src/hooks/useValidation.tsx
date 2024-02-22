import { useCallback, useState } from 'react';
import { QuestInputs } from '../constants/types';

const MIN_PRIORITY: number = 1;
const ERROR_PRIORITY_RANGE: string = '중요도는 1 이상의 숫자를 입력해 주세요.';

function useValidation() {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateRange = useCallback((priority: string) => {
    if (Number(priority) < MIN_PRIORITY) {
      throw new Error(ERROR_PRIORITY_RANGE);
    }
  }, []);

  const validate = useCallback(
    (inputs: QuestInputs) => {
      try {
        validateRange(inputs.priority);
        setErrorMessage('');
        return true;
      } catch (error: unknown) {
        if (error instanceof Error) setErrorMessage(error.message);
        return false;
      }
    },
    [validateRange],
  );

  return { errorMessage, validate };
}

export default useValidation;
