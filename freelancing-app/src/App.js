import { RouterProvider,createBrowserRouter } from "react-router-dom";
import NavbarRouterLinks from "./Navbar/navbarrouterlinks";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Signup from "./pages/signup";
const router = createBrowserRouter([
  {
    path :'/',
    element :<><NavbarRouterLinks/><Home/></>,
  },
  {
    path :'/about',
    element :<><NavbarRouterLinks/><About/></>,
  },
  {
    path :'/contact',
    element :<><NavbarRouterLinks/><Contact/></>,
  },
  {
    path :'/signup',
    element :<><NavbarRouterLinks/><Signup/></>,
  },
])
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}