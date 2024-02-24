import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import QuestStart from './routes/QuestStart';
import NotFound from './routes/NotFound';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: '/quest-start', element: <QuestStart /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
