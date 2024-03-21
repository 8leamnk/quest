import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// components
import Home from './Components/Pages/Home';
import Loading from './Components/Atoms/Loading';

// styles
import Theme from './styles/Theme';

const QuestStart = React.lazy(() => import('./Components/Pages/QuestStart'));
const NotFound = React.lazy(() => import('./Components/Pages/NotFound'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: (
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      ),
    },
    {
      path: 'quest-start',
      element: (
        <Suspense fallback={<Loading />}>
          <QuestStart />
        </Suspense>
      ),
    },
  ]);

  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
