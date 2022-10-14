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

export default function Home() {
  const classes = useStyles();

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.container}>
        <Card fastest />
        <Card />
        <Card type="summary" />
      </main>
    </div>
  );
}
