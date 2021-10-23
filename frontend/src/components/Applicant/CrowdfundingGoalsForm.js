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

const CrowdfundingGoalsForm = ({userType, setUserType}) => {
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
        Crowdfunding Goals
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="goals"
            name="goals"
            label="Please describe the objectives you wish to achieve through crowdfunding, providing as much detail as possible."
            fullWidth
            multiline
            rows={5}
            maxRows={10}
          />
          <Dictaphones2 />
        </Grid>
      </Grid>
      </spokenContext.Provider>
  );
}

export default CrowdfundingGoalsForm