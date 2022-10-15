import React from "react";
import { createUseStyles } from "react-jss";
import { CardDataType } from "../../pages";
import { CardTypeType } from "./Card";
import Chip from "./Chip";
import FooterItem from "./FooterItem";
import Label from "./Label";

type CardFooterType = {
  type?: CardTypeType;
  data: CardDataType;
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
  cardFooterMultiChoice: {
    padding: "0.5rem",
  },
});

const CardFooter = (props: CardFooterType) => {
  const classes = useStyles();
  const { type, data } = props;

  const isMultipleBookingOptions = data?.bookOptions?.length > 1;

  return (
    <footer
      className={`${classes.cardFooter} ${
        isMultipleBookingOptions && classes.cardFooterMultiChoice
      }`}
    >
      <div className={classes.cardFooterItemList}>
        <FooterItem icon="./assets/img/bus-icon.svg" value="Bus" />
        <FooterItem icon="./assets/img/clock-icon.svg" value="4h 30m" />
        {type === "summary" && (
          <FooterItem icon="./assets/img/passengers-icon.svg" value="2" />
        )}
      </div>
      <div>
        {isMultipleBookingOptions ? (
          <Label color="tertiary">Multiple options:</Label>
        ) : (
          <div>
            {type === "summary" ? (
              <Chip value="Itinerary" icon="./assets/img/chip-arrow-gray.svg" />
            ) : (
              <Chip
                value="$45"
                type="primary"
                icon="./assets/img/chip-arrow-blue-light.svg"
              />
            )}
          </div>
        )}
      </div>
    </footer>
  );
};

export default CardFooter;
