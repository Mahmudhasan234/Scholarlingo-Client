import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Main/Main";
import Instractors from "../Pages/Instractors/Instractors";
import Languages from "../Pages/Languages/Languages";
import Home from "./Component/Home/Home/Home";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/instractors",
          element: <Instractors></Instractors>
        },
        {
          path: "/languages",
          element: <Languages></Languages>
        },
      ]
    },
  ]);