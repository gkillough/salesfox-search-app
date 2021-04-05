import React, {useState} from "react";
import { Grid, Container, Button } from "@material-ui/core";

import NewsResults from 'modules/components/NewsResults/newsResults'
import SearchForm from 'modules/components/SearchForm/searchForm'
import ResultCard from "modules/components/ResultCard/resultCard"
// import {getNews} from 'modules/api/api'
import { makeStyles } from "@material-ui/core/styles";

const uglyOrange = "#e14536";
const creamSnow = "#FAF8F8";
const darkSlateGray = "#3f3d56";

const useStyles = makeStyles((theme: any) => ({
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
  topRow: {
    display: 'flex',
    justifyContent : 'space-between'
  }
}));


export default function Home() {
  const classes = useStyles();
  const [newsResults, setNewsResults] = useState([])
  const [industryResults, setIndustryResults] = useState([])
  const [companyResults, setCompanyResults] = useState([]);
  const [PersonaResults, setPersonaResults] = useState([]);
  const [weatherResults, setWeatherResults] = useState([]);
  const [isResultView, setIsResultView] = useState(false)


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
        await fetch(
          `https://search-beta.salesfox.ai/api/companies?name=${keyword}`
        )
          .then((res) => res.json())
          .then(
            (result) => {
              setCompanyResults(result.items);
            },
            (error) => {
              console.log(error);
            }
          );

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
    <Container maxWidth="lg">
      {isResultView ? (
        <div>
          <div className={classes.topRow}>
            <Grid xs={3}>
              <ResultCard title="Prospect Results" text="COMING SOON" />
            </Grid>
            <Grid xs={3}>
                <ResultCard title="company Results" text={companyResults} />
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
              <ResultCard title="Interest Results" text="COMING SOON" />
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
    </Container>
  );
}
