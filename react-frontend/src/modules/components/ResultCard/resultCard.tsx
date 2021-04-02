import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 325,
    width: "100%",
    margin: 30,
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

export default function ResultCard({title, text}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Top Results:
        </Typography>
        <Typography variant="body2" component="p">
          {text[0].title || text}
        </Typography>
        <CardActions>
          <a href={text[0].link} style={{ textDecoration: "none" }}>
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
        <br></br>
        <Typography variant="body2" component="p">
          {text[1].title || text}
        </Typography>
        <CardActions>
          <a href={text[1].link} style={{ textDecoration: "none" }}>
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
        <br></br>
        <Typography variant="body2" component="p">
          {text[2].title || text}
        </Typography>
        <CardActions>
          <a href={text[2].link} style={{ textDecoration: "none" }}>
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </CardContent>
    </Card>
  );
}
