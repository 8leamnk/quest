import { act, renderHook } from '@testing-library/react';
import { RecoilRoot, atom } from 'recoil';
import usePriorityQueue from '../usePriorityQueue';

interface QueueType {
  value: string;
  priority: number;
}

const queueState = atom<QueueType[]>({
  key: 'queueState',
  default: [],
});

describe('우선 순위 큐 테스트', () => {
  test('아무것도 없는 상태에서 제거를 하면 undefined가 반환된다.', () => {
    // when
    const { result } = renderHook(
      () => usePriorityQueue<QueueType>(queueState),
      {
        wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
      },
    );

    // then
    act(() => {
      const element = result.current.dequeue();
      expect(element).toBe(undefined);
    });
  });

  test('중요도가 있는 퀘스트를 여러 개 삽입 후 제거를 하면 중요도가 높은 순서대로 반환된다.', () => {
    // given
    const INPUTS: QueueType[] = [
      { value: 'A', priority: 3 },
      { value: 'B', priority: 4 },
      { value: 'C', priority: 1 },
      { value: 'D', priority: 5 },
      { value: 'E', priority: 2 },
    ];
    const OUTPUTS: Array<QueueType | undefined> = [
      { value: 'D', priority: 5 },
      { value: 'B', priority: 4 },
      { value: 'A', priority: 3 },
      { value: 'E', priority: 2 },
      { value: 'C', priority: 1 },
      undefined,
    ];

    // when
    const { result, rerender } = renderHook(
      () => usePriorityQueue<QueueType>(queueState),
      {
        wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
      },
    );

    INPUTS.forEach((input) => {
      act(() => {
        result.current.enqueue(input);
        rerender();
      });
    });

    // then
    OUTPUTS.forEach((output) => {
      act(() => {
        const element = result.current.dequeue();
        expect(element).toEqual(output);
        rerender();
      });
    });
  });
});
