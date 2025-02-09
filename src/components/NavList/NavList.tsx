import clsx from "clsx";

import styles from "./NavList.module.scss";

const NavList: React.FC<NavListProps> = ({ children, justify = "end", className, ...props }) => {
  return (
    <nav data-testid="nav-list" {...props}>
      <ul className={clsx(styles.root, justify && styles[justify], className)}>{children}</ul>
    </nav>
  );
};

type NavListProps = React.HTMLProps<HTMLDivElement> & {
  justify?: "start" | "center" | "between" | "around" | "end";
};

export default NavList;
