import React from "react"; // Add this import statement
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { useState } from "react";
import { UrlObject } from "url";

import CircularProgress from "@mui/material/CircularProgress";

import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    disabled,
    href,
    className,
    children,
    onClick,
    leftIcon,
    rightIcon,
    id,
    onClickCapture,
    isExternal = false,
    withLoader = false,
    loadingText = null,
    variant = "contained",
    fullWidth = false,
    isLowercase = false,
    isLoading = false,
    size = "medium",
    ...rest
  } = props;

  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    if (!onClick) return;
    setLoading(true);
    try {
      await onClick(e);
    } finally {
      setLoading(false);
    }
  };

  const classes = clsx(
    styles.root,
    fullWidth && styles.fullWidth,
    variant && styles[variant],
    size && styles[size],
    isLowercase && styles.lowercase,
    className && className
  );

  const buttonElements = (
    <>
      {leftIcon}
      {(loading || isLoading) && loadingText !== null ? loadingText : children}
      {loading || isLoading ? (
        <CircularProgress size={20} className={styles.loading} data-testid="button-loader" />
      ) : (
        rightIcon
      )}
    </>
  );
  if (href && !disabled) {
    const linkProps = {
      target: isExternal ? "_blank" : undefined,
      rel: isExternal ? "noopener noreferrer" : undefined,
    };
    return (
      <Link
        href={href}
        {...(rest as Omit<LinkProps, "href">)}
        {...linkProps}
        className={classes}
        onClick={onClick}
        onClickCapture={onClickCapture}
        data-testid="button"
        id={id}
      >
        {buttonElements}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled || loading || isLoading}
      onClick={withLoader ? handleClick : onClick}
      onClickCapture={onClickCapture}
      className={classes}
      data-testid="button"
      id={id}
      {...rest}
    >
      {buttonElements}
    </button>
  );
};

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> &
  Omit<Partial<LinkProps>, "onClick"> & {
    isExternal?: boolean;
    disabled?: boolean;
    className?: string;
    withLoader?: boolean;
    loadingText?: React.ReactNode;
    href?: string | UrlObject;
    fullWidth?: boolean;
    variant?: "text" | "contained" | "action" | "link" | "normal" | "outlined" | "gray" | "light" | "dark" | "gray2";
    size?: "small" | "medium" | "large";
    isLowercase?: boolean;
    isLoading?: boolean;
    leftIcon?: JSX.Element | null;
    rightIcon?: JSX.Element | null;
    onClick?: React.MouseEventHandler<any>;
    onClickCapture?: React.MouseEventHandler<any>;
  };

export default Button;
