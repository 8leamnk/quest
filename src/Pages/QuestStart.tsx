import { useLayoutEffect, useState } from 'react';
import usePriorityQueue from '../hooks/usePriorityQueue';
import { Quest } from '../constants/types';

function QuestStart() {
  const [currentQuest, setCurrentQuest] = useState<Quest | object>({});
  const { dequeue } = usePriorityQueue();

  useLayoutEffect(() => {
    const quest = dequeue();

    setCurrentQuest(quest);
  }, []);

  return <>Start page!</>;
}

export default QuestStart;
