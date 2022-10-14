import React from "react";
import { createUseStyles } from "react-jss";
import Label from "./Label";

type DetailsType = {
  time: string;
  location: string;
  city: string;
};

const useStyles = createUseStyles({
  time: { marginBottom: "0.25rem" },
  location: { marginBottom: "0.125rem" },
  city: { marginBottom: "0.125rem", textTransform: "uppercase" },
  link: {
    cursor: "pointer",
  },
});

const Details = (props: DetailsType) => {
  const classes = useStyles();

  const { time, location, city } = props;

  return (
    <div>
      <Label size="xl" fontWeight="bold" className={classes.time}>
        {time}
      </Label>
      <Label size="lg" color="secondary" className={classes.location}>
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
