import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import profilePic from '../assets/img/react.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  center: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50%",
    border: "2px solid black"
  },
}))

function Profile() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <br/>
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              My Profile
            </Typography>
            <br/>
            <img src={profilePic} width="150" height="auto" className={classes.center} />
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Profile