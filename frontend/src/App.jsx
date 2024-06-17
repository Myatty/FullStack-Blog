/* eslint-disable no-unused-vars */
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Main from './layout/Main'
import Posts, { loader as postsLoader} from "./pages/Posts";
import Create from "./pages/Create";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/create-post",
          element: <Create /> 
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
