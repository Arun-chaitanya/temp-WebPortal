import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import Logo from "@components/Logo";
import LinkedIn from "@icons/LinkedIn";
import IconButton from "@components/IconButton";

const Footer: React.FC<React.HTMLProps<HTMLDivElement>> = (className, disabled, ...props) => {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.right}>
          <div className={styles.middle}>
            <p className={styles.links}>
              <Link href="/about">About Us</Link>
              {" | "}
              <Link href="/partner">Partner with us</Link>
              {" | "}
              <Link href="/contact">Contact us</Link>
            </p>
          </div>
          <div className="flex justify-end">
            <IconButton className={styles.linkedInBox}>
              <LinkedIn />
            </IconButton>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Copyright 2024, Carecove LLC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
