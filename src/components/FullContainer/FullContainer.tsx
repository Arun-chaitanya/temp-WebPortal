import clsx from "clsx";

import { Container } from "@mui/material";

import styles from "./FullContainer.module.scss";

const FullContainer: React.FC<FullContainerProps> = ({ children, className }) => {
  return <Container className={clsx(styles.root, className)}>{children}</Container>;
};

type FullContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export default FullContainer;
