import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Franchise from "./Pages/Franchise";
import Services from "./Pages/Services";
import BookAppointment from "./Pages/BookAppointment";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/franchise",
    element: <Franchise />,
  },
  {
    path: "/book-appointment",
    element: <BookAppointment />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <section className="relative overflow-hidden bg-black">
      <RouterProvider router={router} />
    </section>
  </React.StrictMode>
);
