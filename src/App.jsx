
//import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MainLayout from "./layout/MainLayout";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
      element: <Home></Home>,
    },
     {
    path: "/MovieList",
    element: <MovieList></MovieList>,
  }
    ]
    
  },
 
]);



function Router() {
 

  return (
    <RouterProvider router={router} />
  )
}

export default Router
