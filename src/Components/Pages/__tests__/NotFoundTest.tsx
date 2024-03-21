import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Theme from '../../../styles/Theme';
import Home from '../Home';
import QuestStart from '../QuestStart';
import NotFound from '../NotFound';

describe('404 페이지 테스트', () => {
  test('요소의 존재 여부 테스트', () => {
    // given
    const NOTICE_MESSAGE = '없는 페이지입니다.';
    const GO_MAIN_PAGE_BUTTON = '메인 페이지로';

    // when
    const { getByText } = render(
      <BrowserRouter basename="/">
        <Theme>
          <NotFound />
        </Theme>
      </BrowserRouter>,
    );
    const notice = getByText(NOTICE_MESSAGE);
    const button = getByText(GO_MAIN_PAGE_BUTTON);

    // then
    expect(notice).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('없는 페이지에 진입하면 404 페이지가 뜬다.', () => {
    // given
    const queryClient = new QueryClient();
    const NOTICE_MESSAGE = '없는 페이지입니다.';
    const GO_MAIN_PAGE_BUTTON = '메인 페이지로';

    // when
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Theme>
          <MemoryRouter initialEntries={['/about']}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quest-start" element={<QuestStart />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </MemoryRouter>
        </Theme>
      </QueryClientProvider>,
    );
    const notice = getByText(NOTICE_MESSAGE);
    const button = getByText(GO_MAIN_PAGE_BUTTON);

    // then
    expect(notice).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
