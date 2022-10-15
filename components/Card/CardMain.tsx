import React from "react";
import { createUseStyles } from "react-jss";
import { CardDataType } from "../../pages";
import { CardTypeType } from "./Card";
import Details from "./Details";

type CardMainType = {
  data: CardDataType;
  type?: CardTypeType;
};

const useStyles = createUseStyles({
  cardMain: {
    padding: `0.5rem 0.75rem`,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "1.125rem",
  },
});

const CardMain = (props: CardMainType) => {
  const classes = useStyles();
  const { data, type } = props;

  return (
    <main className={classes.cardMain}>
      <Details
        type={type}
        date={data?.departure?.date}
        location={data?.departure?.location}
        city={data?.departure?.city}
      />
      <img src="./assets/img/timeArrow-icon.svg" />
      <Details
        type={type}
        date={data?.arrival?.date}
        location={data?.arrival?.location}
        city={data?.arrival?.city}
      />
    </main>
  );
};

export default CardMain;
