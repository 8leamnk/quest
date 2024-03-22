import { useLayoutEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// constants
import { QuestType } from '../constants/types';
import { questKey } from '../constants/queryKey';

function useCurrentQuest() {
  const { data: quest } = useQuery<QuestType[]>({ queryKey: questKey });
  const [isEntryEmpty, setIsEntryEmpty] = useState<boolean>(false);
  const [currentQuest, setCurrentQuest] = useState<QuestType | undefined>(
    undefined,
  );

  const handleCurrentQuest = (nextQuest: QuestType) => {
    setCurrentQuest(nextQuest);
  };

  useLayoutEffect(() => {
    if (quest && quest.length === 0) {
      setIsEntryEmpty(true);
    }
  }, []);

  return { currentQuest, isEntryEmpty, handleCurrentQuest };
}

export default useCurrentQuest;
