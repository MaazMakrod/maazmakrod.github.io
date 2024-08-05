import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/404";
import Layout from "./routes/Layout";
import Experience from "./routes/Experience";
import About from "./routes/About";
import Projects from "./routes/Projects";

function App() {
  const ROUTER_CONFIG = [
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
  ];

  const router =
    import.meta.env.VITE_HASH_ROUTER === "true"
      ? createHashRouter(ROUTER_CONFIG) :
      createBrowserRouter(ROUTER_CONFIG);

  return <RouterProvider router={router} />;
}

export default App;
