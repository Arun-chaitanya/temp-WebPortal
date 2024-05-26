import clsx from "clsx";

import Title, { TitleProps } from "@components/Title";

import styles from "./PageTitle.module.scss";

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const { children, variant = "small", className, ...titleProps } = props;
  return (
    <Title
      variant="h1"
      className={clsx(variant && styles[variant], className)}
      data-testid="page-title"
      {...titleProps}
    >
      {children}
    </Title>
  );
};

type PageTitleProps = Omit<TitleProps, "variant"> & {
  variant?: "small" | "medium" | "large" | "x-large";
};

export default PageTitle;
