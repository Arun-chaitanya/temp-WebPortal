import clsx from "clsx";
import xss from "xss";

import BaseTooltip, { TooltipProps as BaseTooltipProps } from "@mui/material/Tooltip";

import preventBubbling from "@utils/preventBubbling";

import Text from "@components/Text";

import styles from "./Tooltip.module.scss";

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, variant = "primary", className, classes, text, onClick, ...rest } = props;

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    onClick && onClick(e);
    return preventBubbling(e);
  };

    return (
    <BaseTooltip
      className={className}
      classes={{
        ...classes,
        popper: clsx(variant && styles[variant], classes?.popper),
        tooltip: clsx(styles.tooltip, classes?.tooltip),
        arrow: clsx(styles.arrow, classes?.arrow),
      }}
      title={text ? <Text dangerouslySetInnerHTML={{ __html: xss(text) }} /> : ""}
      onClick={handleClick}
      {...rest}
      {...defaultTooltipProps}
    >
      {children}
    </BaseTooltip>
  );
};

const defaultTooltipProps = {
  arrow: true,
  placement: "top" as BaseTooltipProps["placement"],
  enterTouchDelay: 0,
  leaveTouchDelay: 10000,
};

type TooltipProps = Omit<BaseTooltipProps, "title"> & {
  variant?: "primary" | "grey";
  text?: string;
};

export default Tooltip;
