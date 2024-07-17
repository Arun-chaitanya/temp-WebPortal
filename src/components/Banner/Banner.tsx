import React from "react"; // Add this import statement
import clsx from "clsx";

import styles from "./Banner.module.scss";
import Image from "@components/Image";
import FullContainer from "@components/FullContainer";

const Banner: React.FC<BannerProps> = (props) => {
  const { className, src } = props;
  return (
    <section>
      <FullContainer>
        <Image src={src} alt="Banner" className={clsx(styles.banner, className)} />
      </FullContainer>
    </section>
  );
};

export type BannerProps = {
  className?: string;
  src: string;
};

export default Banner;
