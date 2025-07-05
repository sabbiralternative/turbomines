import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
