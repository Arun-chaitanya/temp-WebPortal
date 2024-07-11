import clsx from "clsx";
import Link from "next/link";

import Image from "@components/Image";

import styles from "./Logo.module.scss";
import { handleTrackEvent } from "@utils/analytics";
import { FOOTER_EVENTS, HEADER_EVENTS } from "@config/events";

const LOGO_SRC = {
  header: "/assets/carecove_logo.png",
  footer: "/assets/carecove_logo.png",
};

const LOGO_ALT = {
  header: "Company Logo",
  footer: "Company Logo",
};

const Logo: React.FC<LogoProps> = ({ variant = "header", disabled, ...props }) => {
  if (!variant) return null;
  if (disabled)
    return <Image alt={LOGO_ALT[variant]} src={LOGO_SRC[variant]} className={clsx(styles.logo, styles[variant])} />;
  return (
    <Link
      href="/"
      data-testid="logo"
      {...props}
      onClick={handleTrackEvent(
        variant === "header" ? HEADER_EVENTS.HEADER_LOGO_CLICKED : FOOTER_EVENTS.FOOTER_LOGO_CLICKED
      )}
    >
      <Image alt={LOGO_ALT[variant]} src={LOGO_SRC[variant]} className={clsx(styles.logo, styles[variant])} />
    </Link>
  );
};

type LogoProps = React.DetailsHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  variant?: "header" | "footer";
  disabled?: boolean;
};

export default Logo;
