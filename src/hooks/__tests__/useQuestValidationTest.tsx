import { act, renderHook } from '@testing-library/react';
import useValidation from '../useQuestValidation';
import { QuestInputs } from '../../constants/types';

describe('퀘스트 중요도 입력 유효성 검사 기능 테스트', () => {
  test.each([
    [{ title: '', content: '', priority: '' }, null],
    [{ title: '', content: '내용', priority: '1' }, null],
    [{ title: '제목', content: '', priority: '1' }, null],
    [{ title: '제목', content: '내용', priority: '' }, null],
  ])(
    '입력창에 입력하지 않은 것이 있으면 예외가 발생한다. ',
    (inputs: QuestInputs, output) => {
      // given
      const ERROR_MESSAGE = '입력창 전부를 입력해 주세요.';

      // when
      const { result } = renderHook(useValidation);
      act(() => {
        const returnValue = result.current.validate(inputs);
        // then
        expect(returnValue).toBe(output);
      });

      // then
      expect(result.current.errorMsg).toBe(ERROR_MESSAGE);
    },
  );

  test.each([
    ['-1', null],
    ['-2', null],
    ['0', null],
    ['-100', null],
  ])('1 미만의 숫자를 입력하면 예외가 발생한다.', (priority, output) => {
    // given
    const ERROR_MESSAGE = '중요도는 1 이상의 숫자를 입력해 주세요.';
    const INPUTS = {
      title: '제목',
      content: '내용',
      priority,
    };

    // when
    const { result } = renderHook(useValidation);
    act(() => {
      const returnValue = result.current.validate(INPUTS);
      // then
      expect(returnValue).toBe(output);
    });

    // then
    expect(result.current.errorMsg).toBe(ERROR_MESSAGE);
  });

  test('입력창에 올바르게 입력하여 유효성 검사에 문제가 없으면 null를 반환한다.', () => {
    // given
    const ERROR_MESSAGE = '';
    const INPUT = {
      title: '제목',
      content: '내용',
      priority: '5',
    };
    const OUTPUT = {
      title: '제목',
      content: '내용',
      priority: 5,
    };

    // when
    const { result } = renderHook(useValidation);
    act(() => {
      const returnValue = result.current.validate(INPUT);
      // then
      expect(returnValue).toEqual(OUTPUT);
    });

    // then
    expect(result.current.errorMsg).toBe(ERROR_MESSAGE);
  });
});
