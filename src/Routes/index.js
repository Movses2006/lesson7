import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";
import Details from "../Components/Home/details";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/newsletter",
    element: <Newsletter />,
  },
  {
    path: "/coctails/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <>Not found</>,
  },
];

const Route = () => {
  return <>{useRoutes(routes)}</>;
};

export default Route;
