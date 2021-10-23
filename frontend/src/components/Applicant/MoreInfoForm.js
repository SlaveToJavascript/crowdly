import React, { createContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dictaphones2 from './Dictaphone/Dictaphones2';

export const spokenContext = createContext({
    lastSpokenText: "",
    setLastSpokenText: (text) => {}
})

export const spokenContext2 = createContext({
    lastSpokenText: "",
    setLastSpokenText: (text) => {}
})

const MoreInfoForm = ({userType, setUserType}) => {
    const [lastSpokenText, setLastSpokenText] = useState("");
    const [selectedField,setSelectedField] = useState("");
    const [name, setName] = React.useState("");

    const handleNameChange =(event) => {
      setSelectedField(event.target.name)
      setName(event.target.value);
    }

    useEffect(()=>{
      setName(lastSpokenText)
    }, [lastSpokenText])

  return (
    <spokenContext.Provider value={{lastSpokenText, setLastSpokenText}}>
      <Typography variant="h6" gutterBottom>
        More information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="impact"
            name="impact"
            label="What impact do you hope to make with your business?"
            fullWidth
            multiline
            rows={3}
            maxRows={5}
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="targetAudience"
            name="targetAudience"
            label="Identify your target audience and briefly explain your reason(s) for choosing them."
            fullWidth
            multiline
            rows={3}
            maxRows={5}
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="addressTargetAudience"
            name="addressTargetAudience"
            label="How will your business address the problems of your target audience?"
            fullWidth
            multiline
            rows={3}
            maxRows={5}
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="featuresPlans"
            name="featuresPlans"
            label="Explain the features of your business solution as well as your plans to build and implement the solution."
            fullWidth
            multiline
            rows={3}
            maxRows={5}
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="uniqueFeatures"
            name="uniqueFeatures"
            label="How would your business solution stand out and what are its unique features?"
            fullWidth
            multiline
            rows={3}
            maxRows={5}
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="uniqueFeatures"
            name="uniqueFeatures"
            label="What are some metrics you'd use to measure the success of your solution?"
            fullWidth
            multiline
            rows={3}
            maxRows={5}
          />
          <Dictaphones2 />
        </Grid>
      </Grid>
    </spokenContext.Provider>
  );
}

export default MoreInfoForm