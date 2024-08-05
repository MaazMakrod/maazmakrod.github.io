import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/404";
import Layout from "./routes/Layout";
import Experience from "./routes/Experience";
import About from "./routes/About";
import Projects from "./routes/Projects";

// TODO: Add in github repo links and stuff
// TODO: Add in resume
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <Experience />,
          path: "experience",
        },
        {
          element: <About />,
          path: "about",
        },
        {
          element: <Projects />,
          path: "projects",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
