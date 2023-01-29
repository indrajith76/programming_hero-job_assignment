import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Billings from "../pages/Billings/Billings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Billings />,
      },
    ],
  },
]);
