import React, { createContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dictaphones from './Dictaphone/Dictaphones';
import Dictaphones2 from './Dictaphone/Dictaphones2';

export const spokenContext = createContext({
  lastSpokenText: "",
  setLastSpokenText: (text) => {}
})

export const spokenContext2 = createContext({
  lastSpokenText: "",
  setLastSpokenText: (text) => {}
})

const BusinessDetailsForm = ({userType, setUserType}) => {
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
        Your business details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="businessName"
            name="businessName"
            label="Registered Name of Business"
            fullWidth
          />
          <Dictaphones />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="businessOwnerName"
            name="businessOwnerName"
            label="Name of Business Owner"
            fullWidth
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Business Address line 1"
            fullWidth
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Business Address line 2"
            fullWidth
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
          />
          <Dictaphones2 />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
          />
          <Dictaphones2 />
        </Grid>
      </Grid>
      </spokenContext.Provider>
  );
}

export default BusinessDetailsForm