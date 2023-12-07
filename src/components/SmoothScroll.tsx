import { Link as ScrollLink } from "react-scroll";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | string;
  to: string;
  offset: number;
}

const SmoothScroll = ({ children, to, offset }: Props) => {
  return (
    <ScrollLink to={to} spy={true} smooth={true} offset={offset} duration={40}>
      {children}
    </ScrollLink>
  );
};

export default SmoothScroll;
