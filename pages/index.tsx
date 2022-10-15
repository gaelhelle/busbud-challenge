import React from "react";
import Head from "next/head";
import { createUseStyles } from "react-jss";
import Card from "../components/Card/Card";
import { theme } from "../theme";

const useStyles = createUseStyles({
  container: {
    color: theme.textPrimary,
    width: "100%",
    maxWidth: 360,
  },
});

export type CardDataType = {
  departure: {
    date: string;
    location: string;
    city: string;
  };
  arrival: {
    date: string;
    location: string;
    city: string;
  };
};

export default function Home() {
  const classes = useStyles();

  const data: CardDataType = {
    departure: {
      date: "2022-07-28T08:30:00-08:00",
      location: "Port Authoriy",
      city: "New York City",
    },
    arrival: {
      date: "2022-07-30T12:30:00-08:00",
      location: "Union Station",
      city: "Washington",
    },
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.container}>
        <Card fastest data={data} />
        <Card data={data} />
        <Card data={data} type="summary" />
      </main>
    </div>
  );
}
