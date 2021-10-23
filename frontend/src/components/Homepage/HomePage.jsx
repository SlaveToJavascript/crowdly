// import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MediaCard from './Card';
import AppImage from '../../assets/img/AppImage.jpg';
import DonorImage from '../../assets/img/DonorImage.jpg';
import AllPlans from '../Donor/AllPlans';
import ApplicantPage from '../Applicant/ApplicantPage';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  appTitle: {
    margin: 0,
    textAlign: 'center'
  },
  media: {
    height: 140,
  },
});

function HomePage() {
  const [userType, setUserType] = React.useState("Home");
  const classes = useStyles();

  const appTitle ="Applicant"
  const donorTitle = "Donor"
  const appDesc = "As an applicant, you will get to submit a business plan and begin your crowdfunding journey with our support!"
  const donorDesc = "As a donor, you can browse through approved business plans and begin your journey of supporting your very own community!"

  return (
    <>
    {userType==="Home" && 
    <>
    <div style={{display: "flex", flexDirection:"column", alignItems: "center", paddingTop: "2%"}}>
      <Typography variant="h6" className={classes.appTitle}>Var Co. Presents</Typography>
      <Typography variant="h1" className={classes.appTitle}>Crowdly</Typography>
      <Typography variant="h6" className={classes.appTitle}>One-stop crowdfunding platform to provide business owners the financial aid they need for anytime, anywhere.</Typography>
    </div>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "5%"}}>
      <MediaCard title={appTitle} desc={appDesc} image={AppImage} userType={userType} setUserType={setUserType} />
      <MediaCard title={donorTitle} desc={donorDesc} image={DonorImage} userType={userType} setUserType={setUserType}/>
    </div>
    </>
    }

    {userType==="Applicant" && <ApplicantPage userType={userType} setUserType={setUserType}/>}

    {userType==="Donor" && <AllPlans userType={userType} setUserType={setUserType}/>}

    </>
  );
}
export default HomePage;