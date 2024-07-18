import clsx from "clsx";
import React from "react";

import FullContainer from "@components/FullContainer";
import Image from "@components/Image";

import styles from "./Banner.module.scss";

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
