import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Instractors from "../Pages/Instractors/Instractors";
import Languages from "../Pages/Languages/Languages";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/Home/Login/Login";
import Registration from "./Component/Home/Registration/Registration";
import Dashboard from "../Main/Dashboards/Dashboard";
import SelectedCourse from "../Pages/DashBoard/StudentDashboard/SelectedCourse";
import PrivateRoute from "./privateRoute/PrivateRoute";
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
        path: "/login",
        element: <Login></Login>
      },
      ,
      {
        path: "/registration",
        element: <Registration></Registration>
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
  {
    path: "/dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: "selectedCourse",
        element: <PrivateRoute><SelectedCourse></SelectedCourse></PrivateRoute>
      }
    ]
  }
]);