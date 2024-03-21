import { useCallback } from 'react';
import { QueryKey, useQuery, useQueryClient } from '@tanstack/react-query';

interface QueueType {
  priority: number;
}

const START_INDEX = 0;

function usePriorityQueue<T extends QueueType>(queryKey: QueryKey) {
  const queryClient = useQueryClient();

  const { data: queryData } = useQuery<T[]>({
    queryKey,
    initialData: [],
    staleTime: Infinity,
  });

  const updateQueryData = (data: T[]) => {
    queryClient.setQueryData(queryKey, data);
    queryClient.invalidateQueries({ queryKey });
  };

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
      const queue = [...queryData];
      queue.push(element);
      const newQueue = bubbleUp(queue);
      updateQueryData(newQueue);

      return true;
    },
    [queryData],
  );

  const dequeue = useCallback((): T => {
    let newQueue = [...queryData];
    const quest = newQueue[START_INDEX];
    const end = newQueue.pop();

    if (newQueue.length > 0 && end) {
      newQueue[START_INDEX] = end;
      newQueue = sinkDown(newQueue);
    }

    updateQueryData(newQueue);

    return quest;
  }, [queryData]);

  return { enqueue, dequeue };
}

export default usePriorityQueue;
