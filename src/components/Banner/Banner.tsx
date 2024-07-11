import React from "react"; // Add this import statement
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { useState } from "react";
import { UrlObject } from "url";

import CircularProgress from "@mui/material/CircularProgress";

import styles from "./Banner.module.scss";
import Image from "@components/Image";

const Banner: React.FC<BannerProps> = (props) => {
  const { className, src } = props;
  return (
    <section>
      <Image src={src} alt="Banner" className={clsx(styles.banner, className)} />
    </section>
  );
};

export type BannerProps = {
  className?: string;
  src: string;
};

export default Banner;
