import { ReactNode } from "react";
import Home from "../../pages/Home";

interface NavLink {
  to: string;
  text: string;
  element?: ReactNode;
  link?: string;
};

const NavLinks: NavLink[] = [
  {
    to: "/",
    text: "Home",
    element: <Home />,
  },
];

export default NavLinks;