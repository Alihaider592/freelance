import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

import NavbarRouterLinks from "./Navbar/navbarrouterlinks";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Signup from "./pages/signup";
import LoadingScreen from "./pages/loading_screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavbarRouterLinks />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavbarRouterLinks />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavbarRouterLinks />
        <Contact />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <NavbarRouterLinks />
        <Signup />
      </>
    ),
  },
]);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading (assets, auth, api, etc)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <RouterProvider router={router} />;
}
