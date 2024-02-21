import { act, renderHook } from '@testing-library/react';
import usePriorityQueue from '../usePriorityQueue';

describe('우선 순위 큐 테스트', () => {
  test('아무것도 없는 상태에서 제거를 하면 undefined가 반환된다.', () => {
    // when
    const { result } = renderHook(usePriorityQueue);
    const element = result.current.dequeue();

    // then
    expect(element).toBe(undefined);
  });

  test('중요도가 있는 퀘스트를 여러 개 삽입 후 제거를 하면 중요도가 높은 순서대로 반환된다.', () => {
    // given
    const INPUTS = [
      { title: '제목', content: '내용', priority: 3 },
      { title: '제목', content: '내용', priority: 4 },
      { title: '제목', content: '내용', priority: 1 },
      { title: '제목', content: '내용', priority: 5 },
      { title: '제목', content: '내용', priority: 2 },
    ];
    const OUTPUTS = [
      { title: '제목', content: '내용', priority: 5 },
      { title: '제목', content: '내용', priority: 4 },
      { title: '제목', content: '내용', priority: 3 },
      { title: '제목', content: '내용', priority: 2 },
      { title: '제목', content: '내용', priority: 1 },
      undefined,
    ];

    // when
    const { result, rerender } = renderHook(usePriorityQueue);

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
