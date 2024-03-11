import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Pages/Home';
import QuestStart from './Components/Pages/QuestStart';
import NotFound from './Components/Pages/NotFound';
import Theme from './styles/Theme';
import './styles/common/font-face.css';

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
