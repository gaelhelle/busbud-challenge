import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../../theme";
import Amenities, { AmenitiesItems } from "./Amenities";
import Chip from "./Chip";
import Details from "./Details";
import FooterItem from "./FooterItem";

type CardType = {
  fastest: boolean;
  type?: "sellable" | "summary";
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

  const { fastest, type = "sellable" } = props;

  return (
    <div className={`${classes.card} ${fastest && classes.fastest}`}>
      {fastest && (
        <div className={classes.fastestContent}>
          <img src="./assets/img/fastest-icon.svg" /> Fastest
        </div>
      )}
      <div className={classes.cardContent}>
        <header className={classes.cardHeader}>
          <div>
            <img src="./assets/img/logos/greyhound.png" height="24" />
          </div>
          <Amenities
            amenities={[
              AmenitiesItems.wifi,
              AmenitiesItems.toilets,
              AmenitiesItems.eticket,
            ]}
          />
        </header>
        <main className={classes.cardMain}>
          <Details
            time="8:00am"
            location="Port Authority"
            city="New York City"
          />
          <img src="./assets/img/timeArrow-icon.svg" />
          <Details time="12:30pm" location="Union Station" city="Washington" />
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
