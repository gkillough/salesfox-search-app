import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  appbar: {
    padding: "0 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "4em",
    [theme.breakpoints.down("sm")]: {
      height: "3em",
    },
  },
  button: {
    ...theme.actionButton,
    marginLeft: "auto",
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  loginButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();


  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="static"
      className={classes.appbar}
    >
      <Toolbar disableGutters>
        <Button disableRipple className={classes.logoContainer}>
          <img
            alt="salesfox logo"
            className={classes.logo}
            src={"modules/assets/salesfox-logo-final.png"}
          />
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
        >
          Sign Up!
        </Button>
        <Button className={classes.loginButton}>Log In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
