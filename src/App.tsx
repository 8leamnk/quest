import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import QuestStart from './Pages/QuestStart';
import NotFound from './Pages/NotFound';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: 'quest-start', element: <QuestStart /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
