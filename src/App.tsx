import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
