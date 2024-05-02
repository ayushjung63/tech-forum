import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuestionDetail from "./component/detailpage/QuestionDetail";
import QuestionPage from "./component/detailpage/QuestionPage";
import Home from "./component/home/Home";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail/:id",
      element: <QuestionPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
