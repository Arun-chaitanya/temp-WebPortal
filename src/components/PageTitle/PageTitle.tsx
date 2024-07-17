import clsx from "clsx";

import Title, { TitleProps } from "@components/Title";

import styles from "./PageTitle.module.scss";

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const { children, variant = "small", className, color = "midnight-lagoon", ...titleProps } = props;
  return (
    <Title
      variant="h1"
      data-testid="page-title"
      {...titleProps}
      className={clsx(styles.root, variant && styles[variant], className)}
      color={color}
    >
      {children}
    </Title>
  );
};

type PageTitleProps = Omit<TitleProps, "variant"> & {
  variant?: "x-small" | "small" | "medium" | "large" | "x-large";
};

export default PageTitle;
