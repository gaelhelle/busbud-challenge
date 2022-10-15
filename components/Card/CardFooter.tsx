import React from "react";
import { createUseStyles } from "react-jss";
import { CardTypeType } from "./Card";
import Chip from "./Chip";
import FooterItem from "./FooterItem";

type CardFooterType = {
  type?: CardTypeType;
};

const useStyles = createUseStyles({
  cardFooter: {
    paddingLeft: `0.5rem`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardFooterItemList: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
});

const CardFooter = (props: CardFooterType) => {
  const classes = useStyles();
  const { type } = props;

  return (
    <footer className={classes.cardFooter}>
      <div className={classes.cardFooterItemList}>
        <FooterItem icon="./assets/img/bus-icon.svg" value="Bus" />
        <FooterItem icon="./assets/img/clock-icon.svg" value="4h 30m" />
        {type === "summary" && (
          <FooterItem icon="./assets/img/passengers-icon.svg" value="2" />
        )}
      </div>
      <div>
        {type === "summary" ? (
          <Chip value="Itinerary" icon="./assets/img/chip-arrow-gray.svg" />
        ) : (
          <Chip
            value="$45"
            type="primary"
            icon="./assets/img/chip-arrow-blue.svg"
          />
        )}
      </div>
    </footer>
  );
};

export default CardFooter;
