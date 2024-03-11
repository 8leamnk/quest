import { act, renderHook } from '@testing-library/react';
import { QuestType } from '../../constants/types';
import useRegistration from '../useRegistration';

describe('퀘스트 등록 기능 테스트', () => {
  test('사용자가 등록한 순서대로 퀘스트가 등록된다.', () => {
    // given
    const INPUT_AND_OUTPUT: QuestType[] = [
      { title: '제목', content: '내용', priority: 3 },
      { title: '제목', content: '내용', priority: 1 },
      { title: '제목', content: '내용', priority: 4 },
      { title: '제목', content: '내용', priority: 7 },
      { title: '제목', content: '내용', priority: 2 },
    ];

    // when
    const { result, rerender } = renderHook(useRegistration);
    INPUT_AND_OUTPUT.forEach((input) => {
      act(() => {
        result.current.registerQuest(input);
        rerender();
      });
    });

    // then
    expect(result.current.registeredData).toEqual(INPUT_AND_OUTPUT);
  });
});
