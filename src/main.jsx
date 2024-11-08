import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorPage from "./components/errorPage/ErrorPage";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import BookDetails from "./components/books/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books/:bookId",
        element: <BookDetails />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
