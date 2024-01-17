import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";

  const Route = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>
    },
  ]);

export default Route;