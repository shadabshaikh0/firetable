import React from "react";

import {
  makeStyles,
  createStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

import useSettings from "../hooks/useSettings";
import useRouter from "../hooks/useRouter";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const TablesView = (props: any) => {
  const [settings, createTable] = useSettings();
  const tables = settings.tables;
  const classes = useStyles();
  const router = useRouter();

  return (
    <Grid container>
      {tables
        ? tables.map((table: any) => (
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {table.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  primary
                </Typography>
                <Typography variant="body2" component="p">
                  Table summery use
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    router.history.push(`table/${table.collection}`);
                  }}
                >
                  open{" "}
                </Button>
              </CardActions>
            </Card>
          ))
        : "TODO: card skeleton"}
    </Grid>
  );
};
export default TablesView;
