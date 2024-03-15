import { fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Theme from '../../../styles/Theme';
import Home from '../Home';
import { QuestInputs } from '../../../constants/types';

describe('메인 페이지 테스트', () => {
  const TITLE_PLACEHOLDER = '퀘스트 제목을(를) 입력하세요.';
  const CONTENT_PLACEHOLDER = '내용을(를) 입력하세요.';
  const PRIORITY_PLACEHOLDER = '중요도을(를) 입력하세요.';
  const SUBMIT_BUTTON_TEXT = '등록';
  const RESISTERED_QUEST = '등록된 퀘스트';
  const NOTICE = '아직 아무 것도 등록되지 않았습니다.';
  const QUEST_START_BUTTON_TEXT = '퀘스트 시작';

  test('요소의 존재 여부 테스트', () => {
    // when
    const { getByText, getByPlaceholderText } = render(
      <RecoilRoot>
        <Theme>
          <MemoryRouter initialEntries={['/']} basename="/">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </MemoryRouter>
        </Theme>
      </RecoilRoot>,
    );

    // then
    expect(getByPlaceholderText(TITLE_PLACEHOLDER)).toBeInTheDocument();
    expect(getByPlaceholderText(CONTENT_PLACEHOLDER)).toBeInTheDocument();
    expect(getByPlaceholderText(PRIORITY_PLACEHOLDER)).toBeInTheDocument();
    expect(getByText(SUBMIT_BUTTON_TEXT)).toBeInTheDocument();
    expect(getByText(RESISTERED_QUEST)).toBeInTheDocument();
    expect(getByText(NOTICE)).toBeInTheDocument();
  });

  test('퀘스트를 하나 등록하면 퀘스트가 등록되고 퀘스트 시작 버튼이 보인다.', () => {
    // given
    const INPUT: QuestInputs = {
      title: '퀘스트1',
      content: '내용1',
      priority: '3',
    };
    const { getByText, getByPlaceholderText } = render(
      <RecoilRoot>
        <Theme>
          <MemoryRouter initialEntries={['/']} basename="/">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </MemoryRouter>
        </Theme>
      </RecoilRoot>,
    );
    const inputTitle = getByPlaceholderText(TITLE_PLACEHOLDER);
    const inputContent = getByPlaceholderText(CONTENT_PLACEHOLDER);
    const inputPriority = getByPlaceholderText(PRIORITY_PLACEHOLDER);
    const submitButton = getByText(SUBMIT_BUTTON_TEXT);
    const notice = getByText(NOTICE);

    // when
    fireEvent.change(inputTitle, { target: { value: INPUT.title } });
    fireEvent.change(inputContent, { target: { value: INPUT.content } });
    fireEvent.change(inputPriority, { target: { value: INPUT.priority } });
    fireEvent.click(submitButton);

    // then
    expect(getByText(QUEST_START_BUTTON_TEXT)).toBeInTheDocument();
    expect(notice).not.toBeInTheDocument();
  });

  test('퀘스트를 등록하면 등록된 퀘스트에 잘 반영된다.', () => {
    // given
    const INPUTS: QuestInputs[] = [
      { title: '퀘스트1', content: '내용1', priority: '3' },
      { title: '퀘스트2', content: '내용2', priority: '1' },
      { title: '퀘스트3', content: '내용3', priority: '2' },
      { title: '퀘스트4', content: '내용4', priority: '5' },
      { title: '퀘스트5', content: '내용5', priority: '4' },
    ];

    // when
    const { getByText, getByPlaceholderText } = render(
      <RecoilRoot>
        <Theme>
          <MemoryRouter initialEntries={['/']} basename="/">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </MemoryRouter>
        </Theme>
      </RecoilRoot>,
    );
    const inputTitle = getByPlaceholderText(TITLE_PLACEHOLDER);
    const inputContent = getByPlaceholderText(CONTENT_PLACEHOLDER);
    const inputPriority = getByPlaceholderText(PRIORITY_PLACEHOLDER);
    const submitButton = getByText(SUBMIT_BUTTON_TEXT);

    INPUTS.forEach((input: QuestInputs) => {
      fireEvent.change(inputTitle, { target: { value: input.title } });
      fireEvent.change(inputContent, { target: { value: input.content } });
      fireEvent.change(inputPriority, { target: { value: input.priority } });
      fireEvent.click(submitButton);
    });

    // then
    INPUTS.forEach((input) => {
      expect(getByText(input.title)).toBeInTheDocument();
      expect(getByText(input.content)).toBeInTheDocument();
      expect(getByText(input.priority)).toBeInTheDocument();
    });
  });
});
