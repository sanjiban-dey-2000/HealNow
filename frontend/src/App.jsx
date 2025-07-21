import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PublicLayout from './components/layouts/PublicLayout'
import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/ErrorPage'
import TherapistsPage from './pages/TherapistPage'
import About from './pages/About'

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
        },{
          path:'/therapists',
          element: <TherapistsPage/>
        },
        {
          path:"/about",
          element: <About/>
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App