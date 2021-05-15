import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    minWidth: 325,
    width: "100%",
    margin: 30,
    height: 350,
    overflow: "auto",
    borderRadius: 25,
  },
  title: {
    color: "#3f51b5",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 150,
  }
});

export default function NewResults({ title, text, weather, weatherIcon }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        {weather[4] ? (
          <Typography className={classes.pos} color="textSecondary">
            {weather[4].conditions[0].summary}
          </Typography>
        ) : (
          <Typography className={classes.pos} color="textSecondary">
            No Data
          </Typography>
        )}
        <Typography className={classes.pos} color="textSecondary">
          Top Results:
        </Typography>
        {!!text.length ? (
          text.map((item) => (
            <>
              <Typography variant="body2" component="p">
                {item.title}
              </Typography>
              <CardActions>
                <a href={item.link} style={{ textDecoration: "none" }}>
                  <Button size="small" variant="outlined">
                    Learn More
                  </Button>
                </a>
              </CardActions>
              <br></br>
            </>
          ))
        ) : (
          <Typography variant="body2" component="p">
            No Data
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
