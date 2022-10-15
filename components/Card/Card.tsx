import React from "react";
import { createUseStyles } from "react-jss";
import { CardDataType } from "../../pages";
import { theme } from "../../theme";
import { AmenitiesItems } from "./Amenities";
import CardHeader from "./CardHeader";
import Chip from "./Chip";
import Details from "./Details";
import FooterItem from "./FooterItem";

export type CardTypeType = "sellable" | "summary"; // Sorry for this naming

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
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "0.5rem",
  },
  cardMain: {
    padding: `0.5rem 0.75rem`,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "1.125rem",
  },
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
});

const Card = (props: CardType) => {
  const classes = useStyles();
  const { fastest, type = "sellable", data } = props;

  const amenities = [
    AmenitiesItems.wifi,
    AmenitiesItems.toilets,
    AmenitiesItems.eticket,
  ];

  return (
    <div className={`${classes.card} ${fastest && classes.fastest}`}>
      {fastest && (
        <div className={classes.fastestContent}>
          <img src="./assets/img/fastest-icon.svg" /> Fastest
        </div>
      )}
      <div className={classes.cardContent}>
        <CardHeader
          operatorLogo="./assets/img/logos/greyhound.png"
          amenities={amenities}
        />
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
      </div>
    </div>
  );
};

export default Card;
