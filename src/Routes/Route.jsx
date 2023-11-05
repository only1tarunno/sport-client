import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Root from "../Layout/Root";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Registation from "../pages/Registration/Registation";
import PvtRoute from "./PvtRoute";
import AddServices from "../pages/AddService/addServices";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registation></Registation>,
      },
      {
        path: "/addServices",
        element: (
          <PvtRoute>
            <AddServices></AddServices>
          </PvtRoute>
        ),
      },
    ],
  },
]);

export default router;
