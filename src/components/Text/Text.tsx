import clsx from "clsx";
import styles from "./Text.module.scss";

const Text: React.FC<TextProps> = (props) => {
  const {
    className,
    children,
    color,
    align,
    variant = "p",
    font = "dark",
    weight = "normal",
    size = "md",
    noWrap = false,
    ...rest
  } = props;

  const Content = variant as keyof JSX.IntrinsicElements;

  return (
    <Content
      {...rest}
      className={clsx(
        font && styles[font],
        color && styles[color],
        weight && styles[weight],
        size && styles[size],
        align && styles[align],
        noWrap && styles.noWrap,
        className
      )}
      data-testid="text"
    >
      {children}
    </Content>
  );
};

export type TextProps = React.HTMLAttributes<any> & {
  font?: "primary" | "secondary";
  color?: "primary" | "light" | "grey" | "dark" | "danger" | "success" | "info";
  weight?: "normal" | "medium" | "semi-bold" | "bold" | "heavy";
  size?: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  align?: "left" | "center" | "right" | "justify";
  variant?: keyof JSX.IntrinsicElements;
  noWrap?: boolean;
};

export default Text;
