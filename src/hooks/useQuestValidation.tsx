import { useCallback, useState } from 'react';
import { QuestType, QuestInputs } from '../constants/types';

const MIN_PRIORITY = 1;
const ERROR_EMPTY = '입력창 전부를 입력해 주세요.';
const ERROR_PRIORITY_RANGE = '중요도는 1 이상의 숫자를 입력해 주세요.';

function useValidation() {
  const [errorMsg, setErrorMsg] = useState<string>('');

  const validateEmpty = useCallback((inputs: QuestInputs): void => {
    Object.values(inputs).forEach((value) => {
      if (value.length === 0) {
        throw new Error(ERROR_EMPTY);
      }
    });
  }, []);

  const validateRange = useCallback((priority: string): number => {
    const level = Number(priority);

    if (!level || level < MIN_PRIORITY) {
      throw new Error(ERROR_PRIORITY_RANGE);
    }

    return level;
  }, []);

  const validate = useCallback(
    (inputs: QuestInputs): QuestType | null => {
      try {
        validateEmpty(inputs);
        const priority: number = validateRange(inputs.priority);
        setErrorMsg('');
        return { ...inputs, priority };
      } catch (error: unknown) {
        if (error instanceof Error) setErrorMsg(error.message);
        return null;
      }
    },
    [validateRange],
  );

  return { errorMsg, validate };
}

export default useValidation;
