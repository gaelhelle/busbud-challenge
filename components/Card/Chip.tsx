import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../../theme";
import Label from "./Label";

type ChipType = {
  value: string;
  type?: "default" | "primary";
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
      className={`${classes.chip} ${icon && classes.chipWithIcon} ${
        type === "primary" ? classes.primary : classes.default
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
