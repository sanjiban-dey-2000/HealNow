import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./components/layouts/PublicLayout";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import TherapistsPage from "./pages/TherapistPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import TherapistOnboarding from "./pages/TherapistOnboarding";
import UserOnboarding from "./pages/UserOnboarding";
import ProtectedRoute from "./middleware/ProtectedRoute";
import DashboardLayout from "./components/layouts/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/therapists",
          element: <TherapistsPage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/therapistOnboarding",
          element: <TherapistOnboarding />,
        },
        {
          path: "/userOnboarding",
          element: <UserOnboarding />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children:[
        {
          index:true,
          element:<DashboardHome/>
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
