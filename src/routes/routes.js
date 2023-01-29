import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Billings from "../pages/Billings/Billings";
import SignIn from "../pages/SignIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/billings",
        element: <Billings />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
]);
