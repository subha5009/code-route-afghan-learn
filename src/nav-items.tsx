
import { Home, BookOpen, Gamepad2, Video, ClipboardCheck } from "lucide-react";
import Index from "./pages/Index";
import Games from "./pages/Games";
import Videos from "./pages/Videos";
import Exam from "./pages/Exam";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Games",
    to: "/games",
    icon: <Gamepad2 className="h-4 w-4" />,
    page: <Games />,
  },
  {
    title: "Videos",
    to: "/videos",
    icon: <Video className="h-4 w-4" />,
    page: <Videos />,
  },
  {
    title: "Exam",
    to: "/exam",
    icon: <ClipboardCheck className="h-4 w-4" />,
    page: <Exam />,
  },
];
