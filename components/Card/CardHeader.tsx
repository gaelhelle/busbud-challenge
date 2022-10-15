import React from "react";
import { createUseStyles } from "react-jss";
import Amenities, { AmenitiesItems, AmenitiesType } from "./Amenities";

type CardHeaderType = {
  amenities: AmenitiesItems[];
  operatorLogo: string;
};

const useStyles = createUseStyles({
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "0.5rem",
  },
});

const CardHeader = (props: CardHeaderType) => {
  const classes = useStyles();
  const { amenities, operatorLogo } = props;

  return (
    <header className={classes.cardHeader}>
      <div>
        <img src={operatorLogo} height="24" />
      </div>
      <Amenities amenities={amenities} />
    </header>
  );
};

export default CardHeader;
