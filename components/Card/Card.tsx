import React from "react";
import { createUseStyles } from "react-jss";
import { CardDataType } from "../../pages";
import { theme } from "../../theme";
import { AmenitiesItems } from "./Amenities";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardMain from "./CardMain";
import Chip from "./Chip";
import FooterItem from "./FooterItem";
import MultipleBookinOptions from "./MultipleBookingOptions";

export type CardTypeType = "sellable" | "summary" | undefined; // Sorry for this naming

type CardType = {
  fastest?: boolean;
  type?: CardTypeType;
  data: CardDataType;
};

const useStyles = createUseStyles({
  card: {
    borderRadius: 24,
    boxShadow: `0px 1px 4px rgba(32, 65, 90, 0.1), 0px 6px 12px rgba(32, 65, 90, 0.1)`,
  },
  cardContent: {
    padding: "0.5rem",
    borderRadius: 24,
    backgroundColor: "#fff",
  },
  fastest: {
    border: "1px solid #A6F7C2",
    backgroundColor: "#CFFCDD",
  },
  fastestContent: {
    padding: "0.5rem",
    color: theme.textPositiveDark,
    fontSize: "0.75rem",
    fontWeight: 600,
    display: "flex",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  isMultipleBookingOptions: {
    border: "1px solid #A3E7FF",
    backgroundColor: "#E6F6FF",
  },
});

const Card = (props: CardType) => {
  const classes = useStyles();
  const { fastest, type = "sellable", data } = props;

  const amenities = [
    AmenitiesItems.wifi,
    AmenitiesItems.toilets,
    AmenitiesItems.eticket,
  ];

  <CardFooter type={type} data={data} />;

  const isMultipleBookingOptions = data?.bookOptions?.length > 1;

  return (
    <div
      className={`${classes.card} ${
        fastest && !isMultipleBookingOptions && classes.fastest
      } ${isMultipleBookingOptions && classes.isMultipleBookingOptions}`}
    >
      {fastest && !isMultipleBookingOptions && (
        <div className={classes.fastestContent}>
          <img src="./assets/img/fastest-icon.svg" /> Fastest
        </div>
      )}
      <div className={classes.cardContent}>
        <CardHeader
          operatorLogo="./assets/img/logos/greyhound.png"
          amenities={amenities}
        />
        <CardMain type={type} data={data} />
        <CardFooter type={type} data={data} />
      </div>
      {isMultipleBookingOptions && (
        <MultipleBookinOptions options={data.bookOptions} />
      )}
    </div>
  );
};

export default Card;
