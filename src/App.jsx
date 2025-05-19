import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import { Toaster } from "react-hot-toast";
import { ParallaxProvider } from "react-scroll-parallax";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "تعرف-علينا", element: <About /> },
      { path: "خدماتنا", element: <Service /> },
      { path: "تواصل-معنا", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <ParallaxProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ParallaxProvider>
    </>
  );
}

export default App;
