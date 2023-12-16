import { Link as ScrollLink } from "react-scroll";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | string;
  to: string;
  offset: number;
  onNavChange?: () => void;
}

const SmoothScroll = ({ children, to, offset, onNavChange }: Props) => {
  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={40}
      onClick={onNavChange}
    >
      {children}
    </ScrollLink>
  );
};

export default SmoothScroll;
