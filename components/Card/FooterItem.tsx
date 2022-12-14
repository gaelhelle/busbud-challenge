import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../../theme";
import Label from "./Label";

type FooterItemType = {
  icon: string;
  value: string;
};

const useStyles = createUseStyles({
  item: {
    display: "flex",
    alignItems: "center",
    color: theme.textSecondary,
  },
  icon: {
    marginRight: "0.125rem",
  },
});

const FooterItem = (props: FooterItemType) => {
  const { icon, value } = props;
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <img src={icon} height="24" width="24" className={classes.icon} />
      <Label>{value}</Label>
    </div>
  );
};

export default FooterItem;
