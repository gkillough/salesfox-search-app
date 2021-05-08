import React, {useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import ReactGA from 'react-ga';

const uglyOrange = '#e14536'
const creamSnow = '#FAF8F8'
const darkSlateGray = '#3f3d56'

const useStyles = makeStyles((theme: any) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    width: '100%',
    justifyContent: 'space-between'
  },
  submit: {
    width: '100%',
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
  },
  textInput: {
    marginBottom : 10
  }
}));

export default function SearchForm({
  getNews,
  getIndustry,
  getCompany,
  getPersona,
  getWeather,
  setIsResultView,
  setIsDataLoading,
}) {
  // TODO: add validation and ensure secure login
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmit = async (data) => {
    setIsDataLoading(true)
    await getNews(data.interest || data.industry, data.locationB);
    await getIndustry(data.industry, data.locationB);
    await getCompany(data.company);
    await getPersona(data.persona, data.locationB);
    await getWeather(data.locationB);
    setIsResultView(true);
    setIsDataLoading(false);

    ReactGA.event({
      category: "Search",
      action: "A search was performed",
    });
  };

  return (
    <>
      <Typography variant="h1" align="center" className={classes.title}>
        Salesfox Search
      </Typography>
      <Grid
        component="form"
        spacing={1}
        container
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container xs={6}>
          <div className={classes.paper}>
            <Typography variant="subtitle1">Account Based</Typography>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                fullWidth
                id="name"
                label="Name (Coming Soon)"
                placeholder="John doe"
                autoFocus
                size="small"
                disabled
                inputRef={register}
                className={classes.textInput}
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
                label="Title (Coming Soon)"
                placeholder="CEO"
                name="title"
                size="small"
                disabled
                inputRef={register}
                className={classes.textInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="url"
                label="LinkedIn (Coming Soon)"
                placeholder="www.linkedin.com/in"
                name="url"
                size="small"
                disabled
                inputRef={register}
                className={classes.textInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="company"
                label="Customer Company"
                placeholder="eg. Google"
                name="company"
                size="small"
                inputRef={register}
                className={classes.textInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="website"
                label="Website (Coming Soon)"
                placeholder="www.google.com"
                name="website"
                size="small"
                disabled
                inputRef={register}
                className={classes.textInput}
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
                placeholder="eg Software Developer"
                autoFocus
                size="small"
                inputRef={register}
                className={classes.textInput}
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
                label=" Customer Industry"
                placeholder="eg Computer Software"
                name="industry"
                size="small"
                inputRef={register}
                className={classes.textInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="market"
                label="Market (Coming Soon)"
                placeholder="Corporate gifting tool"
                name="market"
                size="small"
                disabled
                inputRef={register}
                className={classes.textInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="locationB"
                label="Customer Zip Code*"
                placeholder="eg 75244"
                name="locationB"
                size="small"
                inputRef={register({ required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="interest"
                label="Customer Interest"
                placeholder="eg Hockey"
                name="interest"
                size="small"
                inputRef={register}
                className={classes.textInput}
              />
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
            disableElevation
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
