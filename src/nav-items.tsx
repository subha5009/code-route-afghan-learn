
import { HomeIcon, BookOpenIcon, GamepadIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Games from "./pages/Games";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Games",
    to: "/games", 
    icon: <GamepadIcon className="h-4 w-4" />,
    page: <Games />,
  },
];
