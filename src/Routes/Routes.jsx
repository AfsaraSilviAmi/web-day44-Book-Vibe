import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/Homepage/HomePage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {path:'/',
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<HomePage></HomePage>
        }
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
])