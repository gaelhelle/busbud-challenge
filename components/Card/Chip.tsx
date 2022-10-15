import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../../theme";
import Label from "./Label";

type ChipType = {
  value: string;
  type?: "default" | "primary" | "secondary";
  icon?: string;
};

const useStyles = createUseStyles({
  chip: {
    border: 0,
    padding: `0.5rem 1.5rem`,
    borderRadius: 40,
    fontWeight: "bold",
    fontSize: "1em",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: theme.textPrimary,
  },
  chipWithIcon: {
    paddingRight: "0.75rem",
  },
  default: {
    backgroundColor: "#F4F7F9",
  },
  primary: {
    color: "#fff",
    backgroundColor: theme.primary,
  },
  secondary: {
    color: theme.textPrimary,
    backgroundColor: "#D4F0FF",
  },
  icon: {
    "& img": {
      display: "block",
    },
  },
});

const Chip = (props: ChipType) => {
  const { type, value, icon } = props;
  const classes = useStyles();

  return (
    <button
      className={`${classes.chip} ${classes.default} ${
        icon && classes.chipWithIcon
      } ${type === "primary" && classes.primary} ${
        type === "secondary" && classes.secondary
      }`}
    >
      <Label color="white" size="lg" fontWeight="bold">
        {value}
      </Label>
      {icon && (
        <div className={classes.icon}>
          <img src={icon} />
        </div>
      )}
    </button>
  );
};

export default Chip;
