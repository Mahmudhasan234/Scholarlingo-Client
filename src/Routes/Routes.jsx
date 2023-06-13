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
import ManageUsers from "../Main/Dashboards/Component/ManageUser/ManageUsers";
import DashBoardHome from "../Main/Dashboards/Home Component/DashBoardHome";
import AddCourses from "../Main/Dashboards/Component/Instructor/Add Courses/AddCourses";
import ManageMyCourse from "../Main/Dashboards/Component/Instructor/ManageMyCourse";
import PendingRequest from "../Main/Dashboards/Component/Admin/PendingRequest";
import PaymentSystem from "../Pages/DashBoard/StudentDashboard/Payment/PaymentSystem";
import PaymentHistory from "../Pages/DashBoard/StudentDashboard/PaymentHistory";
import EnrolledClass from "../Pages/DashBoard/StudentDashboard/EnrolledClass";
import Error from "../shared/404/Error";
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardHome></DashBoardHome>
      },
      {
        path: "selectedCourse",
        element: <PrivateRoute><SelectedCourse></SelectedCourse></PrivateRoute>
      },
      {
        path: "allusers",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "addCourse",
        element: <AddCourses></AddCourses>
      },
      {
        path: "manageCourse",
        element: <ManageMyCourse></ManageMyCourse>
      },
      {
        path: "pendingRequest",
        element: <PendingRequest></PendingRequest>
      },
      {
        path: "payment/:id",
        element: <PaymentSystem></PaymentSystem>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_APIURL}/usersData/${params.id}`),
      },
      {
        path:'history',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'myclasses',
        element:<EnrolledClass></EnrolledClass>
      },
    ]
  },

  {
    path:'*',
    element:<Error></Error>
  }
]);