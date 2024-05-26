import clsx from "clsx";
import Link from "next/link";

import Image from "@components/Image";

import styles from "./Logo.module.scss";

const LOGO_SRC = {
  header: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  footer: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
};

const LOGO_ALT = {
  header: "Company Logo",
  footer: "Company Logo",
};

const Logo: React.FC<LogoProps> = ({ variant = "header", disabled, ...props }) => {
  if (!variant) return null;
  if (disabled)
    return (
      <div className={clsx(styles.logo, styles[variant])}>
        <Image alt={LOGO_ALT[variant]} src={LOGO_SRC[variant]} layout="fill" objectFit="contain" />
      </div>
    );
  return (
    <Link href="/" className={clsx(styles.logo, styles[variant])} data-testid="logo" {...props}>
      <Image alt={LOGO_ALT[variant]} src={LOGO_SRC[variant]} layout="fill" objectFit="contain" />
    </Link>
  );
};

type LogoProps = React.DetailsHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  variant?: "header" | "footer";
  disabled?: boolean;
};

export default Logo;
