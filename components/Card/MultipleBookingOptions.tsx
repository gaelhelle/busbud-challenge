import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../../theme";
import Chip from "./Chip";
import Label from "./Label";

type MultipleBookinOptionsType = {
  options: Object;
};

const useStyles = createUseStyles({
  root: {
    padding: "1rem",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "&:not(:last-of-type)": {
      marginBottom: "0.5rem",
      paddingBottom: "0.5rem",
      borderBottom: "1px solid #A3E7FF",
    },
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
});

const MultipleBookinOptions = (props: MultipleBookinOptionsType) => {
  const { options } = props;
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {options?.map((option) => (
        <li className={classes.item} key={option}>
          <div className={classes.label}>
            <Label size="lg" fontWeight="bold">
              {option.name}
            </Label>
            {option.name === "First-class" && (
              <img src="./assets/img/firstclass-icons.svg" />
            )}
          </div>
          <div>
            <Chip
              value={`$${option.price}`}
              type="secondary"
              icon="./assets/img/chip-arrow-blue-primary.svg"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MultipleBookinOptions;
