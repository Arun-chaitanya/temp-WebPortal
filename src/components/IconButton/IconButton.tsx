import clsx from "clsx";
import Link from "next/link";

import styles from "./IconButton.module.scss";
import React from "react";
import { UrlObject } from "url";

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { children, href, className, isExternal, ...rest } = props;
  if (href) {
    const linkProps = {
      target: isExternal ? "_blank" : undefined,
      rel: isExternal ? "noopener noreferrer" : undefined,
    };
    return (
      <Link href={href} className={clsx(styles.root, className)} data-testid="icon-button" {...linkProps} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={clsx(styles.root, className)} data-testid="icon-button" {...rest}>
      {children}
    </button>
  );
};

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    isExternal?: boolean;
  };

export default IconButton;
