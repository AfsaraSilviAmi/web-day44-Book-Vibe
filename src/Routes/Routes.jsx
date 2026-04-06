import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/Homepage/HomePage";
import ErrorPage from "../pages/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import ListOfBooks from "../pages/Book/ListOfBooks";
import PagesToRead from "../pages/PagesToRead";

export const router = createBrowserRouter([
  {path:'/',
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<HomePage></HomePage>
        },
        {
         path:"/listBooks",
         Component: ListOfBooks
        },
        {
          path:"/pagesToRead",
          Component:PagesToRead,
          loader: () => fetch("/booksData.json")
        },
        {
            path:"/bookDetails/:id",
            Component: BookDetails,
            loader: () => fetch("/booksData.json")
        }
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
])