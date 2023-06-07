import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Main/Main";
import Instractors from "../Pages/Instractors/Instractors";
import Languages from "../Pages/Languages/Languages";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
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