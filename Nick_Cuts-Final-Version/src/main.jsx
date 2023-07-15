import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Barbers from "./pages/Barbers.jsx";
import About from "./pages/About.jsx";
import Booking from "./pages/Booking.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Profile from "./pages/Profile.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "barbers",
        element: <Barbers />,
      },
      {
        path: "barber/:id",
        loader: () => fetch(`/barbers.json`),
        element: <Profile />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
