import React, {useState} from "react";
import {
  Grid,
  Container,
  Button,
  Typography,
  Link
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import NewsResults from 'modules/components/NewsResults/newsResults'
import SearchForm from 'modules/components/SearchForm/searchForm'
import ResultCard from "modules/components/ResultCard/resultCard"
import CompanyResultCard from 'modules/components/CompanyResultCard/companyResultCard'
import ComingSoon from 'modules/components/ComingSoon/ComingSoon'
// import {getNews} from 'modules/api/api'
import { makeStyles } from "@material-ui/core/styles";
import ReactGA from 'react-ga';

const uglyOrange = "#e14536";
const creamSnow = "#FAF8F8";
const darkSlateGray = "#3f3d56";

const useStyles = makeStyles((theme: any) => ({
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
  topRow: {
    display: 'flex',
    justifyContent : 'space-between'
  }
}));


export default function Home() {
  const classes = useStyles();
  const [newsResults, setNewsResults] = useState([]);
  const [industryResults, setIndustryResults] = useState([]);
  const [companyResults, setCompanyResults] = useState([]);
  const [PersonaResults, setPersonaResults] = useState([]);
  const [weatherResults, setWeatherResults] = useState([]);
  const [isResultView, setIsResultView] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);

  ReactGA.pageview('/');


      async function getNews(keyword, location) {
        await fetch(
          `https://search-beta.salesfox.ai/api/news?q=${keyword}&zip_code=${location}`
        )
          .then((res) => res.json())
          .then(
            (result) => {
              setNewsResults(result.items);
            },
            (error) => {
              console.log(error);
            }
          );

      }

      async function getIndustry(keyword, location) {
        await fetch(
          `https://search-beta.salesfox.ai/api/industry?q=${keyword}&zip_code=${location}`
        )
          .then((res) => res.json())
          .then(
            (result) => {
              setIndustryResults(result.items);
            },
            (error) => {
              console.log(error);
            }
          );

      }

      async function getCompany(keyword) {
        if(!!keyword.legth){
          await fetch(
          `https://search-beta.salesfox.ai/api/companies?name=${keyword}`
        )
          .then((res) => res.json())
          .then(
            (result) => {
              setCompanyResults(result);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }

      async function getPersona(keyword, location) {
        await fetch(
          `https://search-beta.salesfox.ai/api/persona?q=${keyword}&zip_code=${location}`
        )
          .then((res) => res.json())
          .then(
            (result) => {
              setPersonaResults(result.items);
            },
            (error) => {
              console.log(error);
            }
          );

      }

      async function getWeather(location) {
        await fetch(
          `https://search-beta.salesfox.ai/api/weather?zip_code=${location}`
        )
          .then((res) => res.json())
          .then(
            (result) => {
              setWeatherResults(result.weather);
            },
            (error) => {
              console.log(error);
            }
          );

      }

      const getResults = async (keyword, location, name) => {
         await getNews(keyword, location);
         await getIndustry(keyword, location);
         await getCompany(name);
         await getPersona(keyword, location);
         await getWeather(location);
         setIsResultView(true);
      }

  return (
    <Container maxWidth="xl">
      <>
        {isDataLoading && <CircularProgress />}
        {isResultView ? (
          <div>
            <div className={classes.topRow}>
              <Grid xs={3}>
                <ComingSoon title="Prospect Results"/>
              </Grid>
              <Grid xs={3}>
                <CompanyResultCard
                  title="Company Results"
                  data={companyResults}
                />
              </Grid>
              <Grid xs={3}>
                <NewsResults
                  title="Location Results"
                  text={newsResults}
                  weather={weatherResults}
                  weatherIcon={weatherResults}
                />
              </Grid>
            </div>
            <div className={classes.topRow}>
              <Grid xs={3}>
                <ResultCard title="Persona Results" text={PersonaResults} />
              </Grid>
              <Grid xs={3}>
                <ComingSoon title="Interest Results" />
              </Grid>
              <Grid xs={3}>
                <ResultCard title="Market Results" text={industryResults} />
              </Grid>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disableElevation
              onClick={() => setIsResultView(false)}
            >
              Search Again
            </Button>
          </div>
        ) : (
          <>
            <SearchForm
              getNews={getNews}
              getIndustry={getIndustry}
              getCompany={getCompany}
              getPersona={getPersona}
              getWeather={getWeather}
              setIsResultView={setIsResultView}
              setIsDataLoading={setIsDataLoading}
            />
            {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disableElevation
            onClick={() => getResults("technology", "75024", "google")}
          >
            Find Triggers
          </Button> */}
          </>
        )}
        <br />
        <Typography variant="body2" component="p" align="center">
          <Link
            color="inherit"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf-0rkzp6h2vFz0hTKMT9jVnWNjZmoBGpPSsq-uauxb8SJI8A/viewform"
          >
            Click Here To Provide Feedback
          </Link>
        </Typography>
        <br />
        <br />
      </>
    </Container>
  );
}
