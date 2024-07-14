import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import styles from "./NavItem.module.scss";

const NavItem: React.FC<NavItemProps> = (props) => {
  const router = useRouter();
  const {
    children,
    className,
    exact,
    href,
    onClick,
    active,
    id,
    underlineClassName,
    isExternal = false,
    showActive = true,
    position = "right",
    variant = "big",
    showDivider = false,
    ...rest
  } = props;

  // const router = useRouter();

  const isActive =
    showActive && (active || (href && (exact ? router.asPath === href : router.asPath.startsWith(href))));

  const renderLink = () => {
    if (!href) return <a onClick={onClick}>{children}</a>;
    if (isExternal)
      return (
        <div>
          <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className="relative">
            {children}
            <div className={clsx(styles.underline, isActive && styles.activeUnderline)}></div>
          </a>
          {showDivider && <span className="mh10">|</span>}
        </div>
      );
    return (
      <div>
        <Link {...rest} href={href} onClick={onClick} className="relative">
          {children}
          <div className={clsx(styles.underline, isActive && styles.activeUnderline)}></div>
        </Link>
        {showDivider && <span className="mh10">|</span>}
      </div>
    );
  };

  return (
    <li className={clsx(styles.root, position && styles[position], variant && styles[variant], className)} id={id}>
      {renderLink()}
    </li>
  );
};

type NavItemProps = React.PropsWithChildren<
  Omit<LinkProps, "href"> & {
    className?: string;
    exact?: boolean;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    isExternal?: boolean;
    active?: boolean;
    showActive?: boolean;
    position?: "left" | "right" | "justify" | "center";
    variant?: "big" | "medium" | "small";
    id?: string;
    underlineClassName?: string;
    showDivider?: boolean;
  }
>;

export default NavItem;
