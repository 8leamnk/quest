import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Theme from './styles/Theme';
import './styles/common/font-face.css';

const QuestStart = React.lazy(() => import('./Components/Pages/QuestStart'));
const NotFound = React.lazy(() => import('./Components/Pages/NotFound'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: (
        <Suspense fallback={<>loading...</>}>
          <NotFound />
        </Suspense>
      ),
    },
    {
      path: 'quest-start',
      element: (
        <Suspense fallback={<>loading...</>}>
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
