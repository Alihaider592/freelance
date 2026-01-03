import { RouterProvider,createBrowserRouter } from "react-router-dom";
import NavbarRouterLinks from "./Navbar/navbarrouterlinks";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
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
])
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}