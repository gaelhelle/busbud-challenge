import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../../theme";

type SizeType = "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
type BoldType = "default" | "bold" | "extrabold" | null;
type ColorType = "primary" | "secondary" | "tertiary" | "link" | "white";

type LabelType = {
  size?: SizeType;
  fontWeight?: BoldType;
  color?: ColorType;
  children: string;
  className?: string;
};

const useStyles = createUseStyles({
  text: {},
  xxl: { fontSize: "1.5rem" },
  xl: { fontSize: "1.125rem" },
  lg: { fontSize: "1rem" },
  md: { fontSize: "0.875rem" },
  sm: { fontSize: "0.75rem" },
  xs: { fontSize: "0.625rem", textTransform: "uppercase" },
  xxs: { fontSize: "0.5625rem", textTransform: "uppercase" },
  bold: {
    fontWeight: 600,
  },
  extrabold: {
    fontWeight: 800,
  },
  primary: {
    color: theme.textPrimary,
  },
  secondary: {
    color: theme.textSecondary,
  },
  tertiary: {
    color: theme.textTertiary,
  },
  link: {
    color: theme.textLink,
  },
  white: {
    color: "#fff",
  },
});

const Label = (props: LabelType) => {
  const {
    size = "md",
    fontWeight = "default",
    color = "primary",
    children,
    className,
  } = props;
  const classes = useStyles();

  let sizeClass = classes.md;

  // There's probably a better way to do it, I just wanted to make it work
  const applySize = (size: SizeType) => {
    switch (size) {
      case "xxl":
        return classes.xxl;
      case "xl":
        return classes.xl;
      case "lg":
        return classes.lg;
      case "md":
        return classes.md;
      case "sm":
        return classes.sm;
      case "xs":
        return classes.xs;
    }
  };

  const applyBold = (bold: BoldType) => {
    switch (bold) {
      case "default":
        return null;
      case "bold":
        return classes.bold;
      case "extrabold":
        return classes.extrabold;
    }
  };

  const applyColor = (color: ColorType) => {
    switch (color) {
      case "primary":
        return classes.primary;
      case "secondary":
        return classes.secondary;
      case "tertiary":
        return classes.tertiary;
      case "link":
        return classes.link;
    }
  };

  return (
    <div
      className={`${classes.text} ${applySize(size)} ${applyBold(
        fontWeight
      )} ${applyColor(color)} ${className}`}
    >
      {children}
    </div>
  );
};

export default Label;
