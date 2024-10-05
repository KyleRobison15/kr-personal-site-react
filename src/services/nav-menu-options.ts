import { IconType } from "react-icons";
import { IoHomeOutline, IoGridOutline, IoMailOutline } from "react-icons/io5";
import { FaRegUser, FaRegLightbulb } from "react-icons/fa";

export interface NavItem {
  title: string;
  for: string;
  offset: number;
  tabIndex: number | null;
  icon: IconType;
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    for: "splash",
    offset: -70,
    tabIndex: null,
    icon: IoHomeOutline,
  },
  {
    title: "About",
    for: "aboutme",
    offset: -115,
    tabIndex: null,
    icon: FaRegUser,
  },
  {
    title: "Portfolio",
    for: "tabs",
    offset: -70,
    tabIndex: 0,
    icon: IoGridOutline,
  },
  {
    title: "Skills",
    for: "tabs",
    offset: -70,
    tabIndex: 1,
    icon: FaRegLightbulb,
  },
  {
    title: "Contact",
    for: "tabs",
    offset: -65,
    tabIndex: 2,
    icon: IoMailOutline,
  },
];
