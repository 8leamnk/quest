import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { QuestType } from '../constants/types';
import { questState } from '../states/main.state';

const START_INDEX = 0;

function usePriorityQueue() {
  const [quests, setQuests] = useRecoilState<QuestType[]>(questState);

  const bubbleUp = useCallback((queue: QuestType[]): QuestType[] => {
    const newQueue = [...queue];
    let currentIndex = newQueue.length - 1;
    const element = newQueue[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parent = newQueue[parentIndex];

      if (parent.priority >= element.priority) break;

      newQueue[currentIndex] = parent;
      newQueue[parentIndex] = element;
      currentIndex = parentIndex;
    }

    return newQueue;
  }, []);

  const sinkDown = useCallback((queue: QuestType[]): QuestType[] => {
    const newQueue = [...queue];
    let currentIndex = START_INDEX;
    const element = newQueue[currentIndex];
    const { length } = newQueue;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const leftChildIdx: number = 2 * currentIndex + 1;
      const rightChildIdx: number = 2 * currentIndex + 2;
      let leftChild: QuestType | undefined;
      let rightChild: QuestType | undefined;
      let swap: number | null = null;

      if (leftChildIdx < length) {
        leftChild = newQueue[leftChildIdx];

        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = newQueue[rightChildIdx];

        if (
          (!leftChild && rightChild.priority > element.priority) ||
          (leftChild && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;

      newQueue[currentIndex] = newQueue[swap];
      newQueue[swap] = element;
      currentIndex = swap;
    }

    return newQueue;
  }, []);

  const enqueue = useCallback(
    (element: QuestType): boolean => {
      const queue = [...quests];
      queue.push(element);
      const newQueue = bubbleUp(queue);
      setQuests(newQueue);

      return true;
    },
    [quests],
  );

  const dequeue = useCallback((): QuestType => {
    let newQueue = [...quests];
    const quest = newQueue[START_INDEX];
    const end = newQueue.pop();

    if (newQueue.length > 0 && end) {
      newQueue[START_INDEX] = end;
      newQueue = sinkDown(newQueue);
    }

    setQuests(newQueue);

    return quest;
  }, [quests]);

  return { enqueue, dequeue };
}

export default usePriorityQueue;
