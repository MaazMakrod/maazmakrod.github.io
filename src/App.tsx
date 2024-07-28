import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/404';
import Layout from './routes/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          element: <Home />,
          index: true,
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
