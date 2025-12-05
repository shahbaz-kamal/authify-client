import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import Login from "@/Pages/Logiin/Login";
import Register from "@/Pages/Register/Register";
import Profile from "@/Pages/Profile/Profile";
import LoginWithPhoneNumber from "@/Pages/LoginWithPhone/LoginWithPhoneNumber";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { generateRoutes } from "@/utils/generateRoute";
import { adminSidebarItems } from "./adminSidebarItems";

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
      {
        Component: LoginWithPhoneNumber,
        path: "/login-with-phone",
      },
    ],
  },
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [{ index: true, element: <Navigate to="/admin/dashboard"></Navigate> }, ...generateRoutes(adminSidebarItems)],
  },
]);
