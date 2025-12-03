import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "@/Pages/Logiin/Login";
import Register from "@/Pages/Register/Register";
import Profile from "@/Pages/Profile/Profile";

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
      {
        Component: Profile,
        path: "/profile",
      },
    ],
  },
]);
