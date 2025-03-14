import { createHashRouter } from "react-router-dom";
import HomePage from "./routes/home";
import DetailPage from "./routes/detail";
import App from "./root";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);