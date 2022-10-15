import React from "react";
import { createUseStyles } from "react-jss";
import { CardTypeType } from "./Card";
import Label from "./Label";
import dayjs from "dayjs";

type DetailsType = {
  type: CardTypeType;
  date: string;
  location: string;
  city: string;
};

const useStyles = createUseStyles({
  date: { marginBottom: "0.5rem" },
  time: { marginBottom: "0.25rem" },
  location: { marginBottom: "0.125rem" },
  city: { marginBottom: "0.125rem", textTransform: "uppercase" },
  link: {
    cursor: "pointer",
  },
});

const Details = (props: DetailsType) => {
  const classes = useStyles();

  const { type, date, location, city } = props;

  return (
    <div>
      <Label
        size="xl"
        fontWeight={type === "sellable" ? "bold" : null}
        className={classes.time}
      >
        {dayjs(date).format("hh:mma")}
      </Label>

      {type === "summary" && (
        <Label color="tertiary" className={classes.date}>
          {dayjs(date).format("ddd, MMM D")}
        </Label>
      )}

      <Label
        size={type === "sellable" ? "lg" : "md"}
        fontWeight={type === "sellable" ? null : "bold"}
        color="secondary"
        className={classes.location}
      >
        {location}
      </Label>
      <Label color="tertiary" size="xs" className={classes.city}>
        {city}
      </Label>
      <Label color="link" size="lg" fontWeight="bold" className={classes.link}>
        Map
      </Label>
    </div>
  );
};

export default Details;
