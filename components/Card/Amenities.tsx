import React from "react";
import { createUseStyles } from "react-jss";

export enum AmenitiesItems {
  wifi = "wifi-icon.svg",
  toilets = "toilets-icon.svg",
  eticket = "eticket-icon.svg",
}

export type AmenitiesType = {
  amenities: AmenitiesItems[];
};

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    display: "flex",
    gap: 10,
    padding: 0,
    margin: 0,
  },
  item: {},
});

const Amenities = (props: AmenitiesType) => {
  const classes = useStyles();
  const { amenities } = props;

  return (
    <ul className={classes.list}>
      {amenities.map((amenity) => (
        <li key={amenity}>
          <img src={`./assets/img/amenities/${amenity}`} />
        </li>
      ))}
    </ul>
  );
};
export default Amenities;
