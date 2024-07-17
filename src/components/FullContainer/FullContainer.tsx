import clsx from "clsx";

import styles from "./FullContainer.module.scss";
import { Container } from "@mui/material";

const FullContainer: React.FC<FullContainerProps> = ({ children, className }) => {
  return <Container className={clsx(styles.root, className)}>{children}</Container>;
};

type FullContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export default FullContainer;
