import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
