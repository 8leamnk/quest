import { useCallback } from 'react';
import { RecoilState, useRecoilState } from 'recoil';

interface QueueType {
  priority: number;
}

const START_INDEX = 0;

function usePriorityQueue<T extends QueueType>(recoilState: RecoilState<T[]>) {
  const [currentQueue, setCurrentQueue] = useRecoilState<T[]>(recoilState);

  const bubbleUp = useCallback((queue: Array<T>): T[] => {
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

  const sinkDown = useCallback((queue: T[]): T[] => {
    const newQueue = [...queue];
    let currentIndex = START_INDEX;
    const element = newQueue[currentIndex];
    const { length } = newQueue;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const leftChildIdx: number = 2 * currentIndex + 1;
      const rightChildIdx: number = 2 * currentIndex + 2;
      let leftChild: T | undefined;
      let rightChild: T | undefined;
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
    (element: T): boolean => {
      const queue = [...currentQueue];
      queue.push(element);
      const newQueue = bubbleUp(queue);
      setCurrentQueue(newQueue);

      return true;
    },
    [currentQueue],
  );

  const dequeue = useCallback((): T => {
    let newQueue = [...currentQueue];
    const quest = newQueue[START_INDEX];
    const end = newQueue.pop();

    if (newQueue.length > 0 && end) {
      newQueue[START_INDEX] = end;
      newQueue = sinkDown(newQueue);
    }

    setCurrentQueue(newQueue);

    return quest;
  }, [currentQueue]);

  return { enqueue, dequeue };
}

export default usePriorityQueue;
