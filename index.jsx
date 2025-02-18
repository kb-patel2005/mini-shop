import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter , RouterProvider } from "react-router"
import App from './App'
import Cardspage from "./component/Cardspage";
import CardDetail from "./component/CardDetail";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Cardspage/>,
        },
        {
          path: "/CardDetail",
          element: <CardDetail/>,
        },
      ]
    },
  ])

const r=createRoot(document.getElementById("root"));

r.render(<RouterProvider router={router} />)