import { fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// components
import Theme from '../../../styles/Theme';
import Home from '../Home';
import QuestStart from '../QuestStart';

// constants
import { QuestInputs } from '../../../constants/types';
import { questKey } from '../../../constants/queryKey';

describe('퀘스트 시작 페이지 테스트', () => {
  // given
  const queryClient = new QueryClient();
  const TITLE_PLACEHOLDER = '퀘스트 제목을(를) 입력하세요.';
  const CONTENT_PLACEHOLDER = '내용을(를) 입력하세요.';
  const PRIORITY_PLACEHOLDER = '중요도을(를) 입력하세요.';
  const SUBMIT_BUTTON_TEXT = '등록';
  const NOTICE = '아직 아무 것도 등록되지 않았습니다.';
  const QUEST_START_BUTTON_TEXT = '퀘스트 시작';
  const GO_TO_MAIN_PAGE_BUTTON_TEXT = '메인 페이지로';
  const COMPLIETION_BUTTON_TEXT = '완료';
  const COMPLIETION = '퀘스트를 모두 완료했습니다.';

  afterEach(() => {
    queryClient.setQueryData(questKey, []);
  });

  test('퀘스트를 등록하지 않은 채로 페이지에 진입하면 안내문구가 나온다.', () => {
    // when
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Theme>
          <MemoryRouter initialEntries={['/quest-start']} basename="/">
            <Routes>
              <Route path="/quest-start" element={<QuestStart />} />
            </Routes>
          </MemoryRouter>
        </Theme>
      </QueryClientProvider>,
    );

    // then
    expect(getByText(NOTICE)).toBeInTheDocument();
    expect(getByText(GO_TO_MAIN_PAGE_BUTTON_TEXT)).toBeInTheDocument();
  });

  test('메인 페이지에서 퀘스트를 등록한 후 시작 페이지에 진입하면 중요도가 가장 높은 퀘스트가 한 개 나온다.', async () => {
    // given
    const INPUTS: QuestInputs[] = [
      { title: '퀘스트1', content: '내용1', priority: '3' },
      { title: '퀘스트2', content: '내용2', priority: '1' },
      { title: '퀘스트3', content: '내용3', priority: '2' },
      { title: '퀘스트4', content: '내용4', priority: '5' },
      { title: '퀘스트5', content: '내용5', priority: '4' },
    ];
    const OUTPUT = { title: '퀘스트4', content: '내용4', priority: '5' };

    // when
    const { getByText, getByPlaceholderText } = render(
      <QueryClientProvider client={queryClient}>
        <Theme>
          <MemoryRouter initialEntries={['/']} basename="/">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quest-start" element={<QuestStart />} />
            </Routes>
          </MemoryRouter>
        </Theme>
      </QueryClientProvider>,
    );
    const inputTitle = getByPlaceholderText(TITLE_PLACEHOLDER);
    const inputContent = getByPlaceholderText(CONTENT_PLACEHOLDER);
    const inputPriority = getByPlaceholderText(PRIORITY_PLACEHOLDER);
    const submitButton = getByText(SUBMIT_BUTTON_TEXT);

    await waitFor(
      () => {
        INPUTS.forEach((input: QuestInputs) => {
          fireEvent.change(inputTitle, { target: { value: input.title } });
          fireEvent.change(inputContent, { target: { value: input.content } });
          fireEvent.change(inputPriority, {
            target: { value: input.priority },
          });
          fireEvent.click(submitButton);
        });
      },
      { timeout: 100 },
    );

    fireEvent.click(getByText(QUEST_START_BUTTON_TEXT));

    // then
    await waitFor(
      () => {
        expect(getByText(OUTPUT.title)).toBeInTheDocument();
        expect(getByText(OUTPUT.content)).toBeInTheDocument();
        expect(getByText(OUTPUT.priority)).toBeInTheDocument();
      },
      { timeout: 100 },
    );
  });

  test('중요도 순서대로 나온 퀘스트를 모두 완료하면 완료 문구가 나온다.', async () => {
    // given
    const INPUTS: QuestInputs[] = [
      { title: '퀘스트1', content: '내용1', priority: '3' },
      { title: '퀘스트2', content: '내용2', priority: '1' },
      { title: '퀘스트3', content: '내용3', priority: '2' },
      { title: '퀘스트4', content: '내용4', priority: '5' },
      { title: '퀘스트5', content: '내용5', priority: '4' },
    ];
    const OUTPUTS = [
      { title: '퀘스트4', content: '내용4', priority: '5' },
      { title: '퀘스트5', content: '내용5', priority: '4' },
      { title: '퀘스트1', content: '내용1', priority: '3' },
      { title: '퀘스트3', content: '내용3', priority: '2' },
      { title: '퀘스트2', content: '내용2', priority: '1' },
    ];

    // when
    const { getByText, getByPlaceholderText } = render(
      <QueryClientProvider client={queryClient}>
        <Theme>
          <MemoryRouter initialEntries={['/']} basename="/">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quest-start" element={<QuestStart />} />
            </Routes>
          </MemoryRouter>
        </Theme>
      </QueryClientProvider>,
    );
    const inputTitle = getByPlaceholderText(TITLE_PLACEHOLDER);
    const inputContent = getByPlaceholderText(CONTENT_PLACEHOLDER);
    const inputPriority = getByPlaceholderText(PRIORITY_PLACEHOLDER);
    const submitButton = getByText(SUBMIT_BUTTON_TEXT);

    await waitFor(
      () => {
        INPUTS.forEach((input: QuestInputs) => {
          fireEvent.change(inputTitle, { target: { value: input.title } });
          fireEvent.change(inputContent, { target: { value: input.content } });
          fireEvent.change(inputPriority, {
            target: { value: input.priority },
          });
          fireEvent.click(submitButton);
        });
      },
      { timeout: 100 },
    );

    fireEvent.click(getByText(QUEST_START_BUTTON_TEXT));

    await waitFor(
      () => {
        OUTPUTS.forEach((output) => {
          expect(getByText(output.title)).toBeInTheDocument();
          expect(getByText(output.content)).toBeInTheDocument();
          expect(getByText(output.priority)).toBeInTheDocument();

          fireEvent.click(getByText(COMPLIETION_BUTTON_TEXT));
        });
      },
      { timeout: 100 },
    );

    expect(getByText(COMPLIETION)).toBeInTheDocument();
  });
});
