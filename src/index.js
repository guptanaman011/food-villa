import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Cart from "./components/cart";

const Instamart = lazy(() => import("./components/Instamart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //  /about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
