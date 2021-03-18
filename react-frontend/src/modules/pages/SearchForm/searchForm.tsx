import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const uglyOrange = '#e14536'
const creamSnow = '#FAF8F8'
const darkSlateGray = '#3f3d56'

const useStyles = makeStyles((theme: any) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    width: '90%',
    justifyContent: 'space-between'
  },
  submit: {
    background: uglyOrange,
    border: `1px solid ${darkSlateGray}`,
    color: creamSnow,
    "&:hover": {
      background: uglyOrange,
      "@media (hover: none)": {
        backgroundColor: uglyOrange,
      },
    },
  },
  title: {
    color : uglyOrange,
    marginLeft: 200
  }
}));

export default function SignUp() {

  // TODO: add validation and ensure secure login
  const classes = useStyles();
  // const { register, handleSubmit, errors } = useForm();

  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <Container maxWidth="lg">
      <Grid component="form" spacing={1} container>
        <Typography variant="h1" align='center' className={classes.title}>Salesfox Search</Typography>
        <Grid container xs={6}>
          <div className={classes.paper}>
            <Typography variant="subtitle1">Account Based</Typography>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                placeholder="John doe"
                autoFocus
                size="small"
              />
              {/* {errors.firstName && (
              <Typography color="error" variant="body2">
                {errors.firstName.message}
              </Typography>
            )} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="title"
                label="Title"
                placeholder="CEO"
                name="title"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="url"
                label="Linkedln"
                placeholder="www.linkedin.com/in"
                name="url"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="company"
                label="Company"
                placeholder="Google"
                name="company"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="website"
                label="Website"
                placeholder="www.google.com"
                name="website"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="location"
                label="Location"
                placeholder="Dallas"
                name="location"
                autoComplete="lname"
                size="small"
              />
            </Grid>
          </div>
        </Grid>
        <Grid container xs={6}>
          <div className={classes.paper}>
            <Typography variant="subtitle1">General</Typography>
            <Grid item xs={12}>
              <TextField
                name="persona"
                variant="outlined"
                fullWidth
                id="persona"
                label="Persona"
                placeholder="Software Developer"
                autoFocus
                size="small"
              />
              {/* {errors.firstName && (
              <Typography color="error" variant="body2">
                {errors.firstName.message}
              </Typography>
            )} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="industry"
                label="Industry"
                placeholder="Computer Software"
                name="industry"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="market"
                label="Market"
                placeholder="corporate gifting tool"
                name="market"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="locationB"
                label="Location"
                placeholder="Dallas"
                name="locationB"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="interest"
                label="Interest"
                placeholder="Hockey"
                name="interest"
                size="small"
              />
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disableElevation
          >
            Find Triggers
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
