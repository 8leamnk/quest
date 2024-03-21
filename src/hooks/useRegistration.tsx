import { useState } from 'react';
import { QuestType } from '../constants/types';

function useRegistration() {
  const [registeredData, setRegisteredData] = useState<QuestType[]>([]);

  const registerQuest = (element: QuestType): void => {
    setRegisteredData((curState) => curState.concat(element));
  };

  return { registeredData, registerQuest };
}

export default useRegistration;
