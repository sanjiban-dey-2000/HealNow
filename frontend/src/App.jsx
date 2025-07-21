import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PublicLayout from './components/layouts/PublicLayout'
import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <PublicLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element: <LandingPage/>
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App