import React, { createContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BusinessDetailsForm from './BusinessDetailsForm';
import CrowdfundingGoalsForm from './CrowdfundingGoalsForm'
import MoreInfoForm from './MoreInfoForm';

export const spokenContext = createContext({
    lastSpokenText: "",
    setLastSpokenText: (text) => {}
})

export const spokenContext2 = createContext({
    lastSpokenText: "",
    setLastSpokenText: (text) => {}
})




const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Business details', 'Crowdfunding Goals', 'More information'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BusinessDetailsForm />;
    case 1:
        return <CrowdfundingGoalsForm />;
    case 2:
        return <MoreInfoForm />
    default:
      throw new Error('Unknown step');
  }
}

const ProposalForm = ({userType, setUserType}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
                Submit your business plan
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <React.Fragment>
                {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                    Thank you for your submission.
                    </Typography>
                    <Typography variant="subtitle1">
                    Your confirmation number is #2001539.
                    </Typography>
                </React.Fragment>
                ) : (
                <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                    {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                        Back
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                    >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                    </div>
                </React.Fragment>
                )}
            </React.Fragment>
            </Paper>
        </main>
    );
}

export default ProposalForm