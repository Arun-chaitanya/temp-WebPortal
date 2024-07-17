import clsx from "clsx";
import styles from "./Text.module.scss";

const Text: React.FC<TextProps> = (props) => {
  const {
    className,
    children,
    color = "dark",
    align,
    style = "normal",
    variant = "p",
    font = "primary",
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
        weight && styles[weight],
        size && styles[size],
        align && styles[align],
        style && styles[style],
        noWrap && styles.noWrap,
        color && styles[color],
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
  color?:
    | "primary-color"
    | "light"
    | "grey"
    | "dark"
    | "danger"
    | "success"
    | "info"
    | "midnight-lagoon"
    | "radical-plum"
    | "oceanic"
    | "neon-blaze";
  weight?: "normal" | "medium" | "semi-bold" | "bold" | "heavy";
  size?: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  align?: "left" | "center" | "right" | "justify";
  style?: "normal" | "italic";
  variant?: keyof JSX.IntrinsicElements;
  noWrap?: boolean;
};

export default Text;
