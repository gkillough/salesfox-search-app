import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 325,
    width: "100%",
    margin: 20,
    height: 350,
    overflow: "auto",
    borderRadius: 25,
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    color: "#3f51b5",
  },
});

export default function ComingSoon({ title}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          COMING SOON
        </Typography>
      </CardContent>
    </Card>
  );
}
