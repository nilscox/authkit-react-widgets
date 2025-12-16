import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import Account from "./routes/account";
import Login from "./routes/login";
import Root from "./routes/root";
import { Users } from "./routes/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
