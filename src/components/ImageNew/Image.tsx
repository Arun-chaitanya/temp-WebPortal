import clsx from "clsx";
import NextImage, { ImageProps } from "next/image";

import styles from "./Image.module.scss";

const Image: React.FC<ImageProps> = (props) => {
  const { className } = props;

  const myLoader = () => {
    return `https://example.com/my-image-loader`;
  };

  return (
    <div className={clsx(styles.root, className)}>
      {props.src ? <NextImage unoptimized data-testid="image" fill loader={myLoader} {...props} /> : null}
    </div>
  );
};

export default Image;
