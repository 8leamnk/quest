import { useCallback, useLayoutEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { questState } from '../states/main.state';
import { QuestType } from '../constants/types';

function useCurrentQuest() {
  const quest = useRecoilValue(questState);
  const [isEntryEmpty, setIsEntryEmpty] = useState<boolean>(false);
  const [currentQuest, setCurrentQuest] = useState<QuestType | undefined>(
    undefined,
  );

  const handleCurrentQuest = useCallback((nextQuest: QuestType) => {
    setCurrentQuest(nextQuest);
  }, []);

  useLayoutEffect(() => {
    if (quest.length === 0) {
      setIsEntryEmpty(true);
    }
  }, []);

  return { currentQuest, isEntryEmpty, handleCurrentQuest };
}

export default useCurrentQuest;
