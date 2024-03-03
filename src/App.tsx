import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import QuestStart from './Pages/QuestStart';
import NotFound from './Pages/NotFound';
import Theme from './styles/Theme';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: 'quest-start', element: <QuestStart /> },
  ]);

  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
