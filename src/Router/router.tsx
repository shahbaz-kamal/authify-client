import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "@/Pages/Logiin/Login";
import Register from "@/Pages/Register/Register";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Login,
        path: "/login",
      },
      {
        Component: Register,
        path: "/register",
      },
    ],
  },
]);
