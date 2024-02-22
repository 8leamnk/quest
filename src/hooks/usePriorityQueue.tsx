import { useCallback, useState } from 'react';
import { Quest } from '../constants/types';

const START_INDEX: number = 0;

function usePriorityQueue() {
  const [quests, setQuests] = useState<Quest[]>([]);

  const bubbleUp = useCallback((queue: Array<Quest>) => {
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

  const sinkDown = useCallback((queue: Array<Quest>) => {
    const newQueue = [...queue];
    let currentIndex = START_INDEX;
    const element = newQueue[currentIndex];
    const { length } = newQueue;

    while (true) {
      const leftChildIdx: number = 2 * currentIndex + 1;
      const rightChildIdx: number = 2 * currentIndex + 2;
      let leftChild: Quest | undefined;
      let rightChild: Quest | undefined;
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
    (element: Quest) => {
      const queue = [...quests];
      queue.push(element);
      const newQueue = bubbleUp(queue);
      setQuests(newQueue);
    },
    [quests],
  );

  const dequeue = useCallback(() => {
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
