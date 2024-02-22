import { useCallback, useState } from 'react';
import { Quest } from '../constants/types';

function useRegistration() {
  const [registeredData, setRegisteredData] = useState<Quest[]>([]);

  const registerQuest = useCallback((element: Quest): void => {
    setRegisteredData((curState) => curState.concat(element));
  }, []);

  return { registeredData, registerQuest };
}

export default useRegistration;
