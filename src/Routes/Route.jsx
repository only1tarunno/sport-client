import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Root from "../Layout/Root";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Registation from "../pages/Registration/Registation";
import PvtRoute from "./PvtRoute";
import AddServices from "../pages/AddService/addServices";
import AllServices from "../pages/AllServices/AllServices";
import SingleService from "../pages/SingleService/SingleService";
import ManageServices from "../pages/ManageServices/ManageServices";
import UpdateService from "../pages/ManageServices/UpdateService";
import MySchedules from "../pages/MySchedules/MySchedules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registation></Registation>,
      },
      {
        path: "services/:id",
        element: (
          <PvtRoute>
            <SingleService></SingleService>
          </PvtRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/myServices",
        element: (
          <PvtRoute>
            <ManageServices></ManageServices>
          </PvtRoute>
        ),
      },
      {
        path: "/updateService/:id",
        element: (
          <PvtRoute>
            <UpdateService></UpdateService>
          </PvtRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/addServices",
        element: (
          <PvtRoute>
            <AddServices></AddServices>
          </PvtRoute>
        ),
      },
      {
        path: "/mySchedules",
        element: (
          <PvtRoute>
            <MySchedules></MySchedules>
          </PvtRoute>
        ),
      },
    ],
  },
]);

export default router;
