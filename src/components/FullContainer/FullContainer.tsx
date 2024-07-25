import clsx from "clsx";

import styles from "./FullContainer.module.scss";

const FullContainer: React.FC<FullContainerProps> = ({ children, className }) => {
  return <div className={clsx(styles.root, className)}>{children}</div>;
};

type FullContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export default FullContainer;
