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

export default function CompanyResultCard({title, data}) {
  const classes = useStyles();

  var rows:JSX.Element[] = [];
  if (data && data.companies) {
    data.companies.forEach(function (company) {
      rows.push(
        <div>
          <hr/>
          <Typography variant="body2" component="p">
            Name: {company.name ? company.name : "Unknown"}
          </Typography>
          <Typography variant="body2" component="p">
            Industry: {company.industry ? company.industry : "Unknown"}
          </Typography>
          <Typography variant="body2" component="p">
            Size: {company.size ? company.size : "Unknown"}
          </Typography>
          <Typography variant="body2" component="p">
            Website: {company.website ? company.website : "Unknown"}
          </Typography>
          <Typography variant="body2" component="p">
            Year Founded: {company.year_founded ? company.year_founded : "Unknown"}
          </Typography>
          <Typography variant="body2" component="p">
            Country: {company.country ? company.country : "Unknown"}
          </Typography>
          <Typography variant="body2" component="p">
            Region: {company.region ? company.region : "Unknown"}
          </Typography>
          <Typography variant="body2" component="p">
            Locality: {company.locality ? company.locality : "Unknown"}
          </Typography>
          <Typography variant="body2" component="p">
            LinkedIn: {company.linkedin_url ? company.linkedin_url : "Unknown"}
          </Typography>
        </div>
      );
    });
  }

//   const cardContent = rows ? ({rows}) : (
//       <Typography variant="body2" component="p">
//         "Unable to Retrieve Data"
//       </Typography>
//     );

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Top Results:
        </Typography>

        {rows ? rows :
          <Typography variant="body2" component="p">
            Unable to Retrieve Data 
          </Typography>
        }

      </CardContent>
    </Card>
  );
}
