import React, {useEffect, useState} from "react";
import { Grid, Container, Button } from "@material-ui/core";

import NewsResults from 'modules/components/NewsResults/newsResults'
import SearchForm from 'modules/components/SearchForm/searchForm'
import {getNews} from 'modules/api/api'
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
  }
}));


export default function Home() {
  const classes = useStyles();
  const [newsResults, setNewsResults] = useState([])
  const [isResultView, setIsResultView] = useState(false)


      async function getNews(keyword, location) {
        await fetch(
          `http://localhost:5000/api/news?q=${keyword}&zip_code=${location}`
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

          setIsResultView(!isResultView)
      }

  return (
    <div>
      <Container maxWidth="lg">
        {isResultView ? (
          <Grid xs={3}>
            {newsResults && newsResults.map(({ title, description, link }) => (
              <NewsResults
                title={title}
                description={description}
                link={link}
              />
            ))}
          </Grid>
        ) : (
          <SearchForm />
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disableElevation
          onClick={() => getNews("business", "75024")}
        >
          Find Triggers
        </Button>
      </Container>
    </div>
  );
}
