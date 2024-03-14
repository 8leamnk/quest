import { renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import useCurrentQuest from '../useCurrentQuest';

describe('퀘스트 시작 페이지 유효성 검사 기능 테스트', () => {
  test('퀘스트를 등록하지 않은 채로 시작 페이지에 진입하면 true인 상태값을 반환한다.', () => {
    // given
    const OUTPUT = true;

    // when
    const { result } = renderHook(() => useCurrentQuest(), {
      wrapper: RecoilRoot,
    });

    // then
    expect(result.current.isEntryEmpty).toBe(OUTPUT);
  });
});
