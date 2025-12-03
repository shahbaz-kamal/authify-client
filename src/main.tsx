import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router";
import { router } from "./Router/router.tsx";
import { Toaster } from "sonner";
import { store } from "./Redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster richColors></Toaster>
    </ReduxProvider>
  </StrictMode>
);
