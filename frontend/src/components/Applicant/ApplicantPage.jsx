import React from 'react';
import ProposalForm from './ProposalForm';
import ProposalStatus from './ProposalStatus';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input'
import FormGroup from '@material-ui/core/FormGroup'
import Typography from '@material-ui/core/Typography';
import NavBar from '../Navbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';
// import GoogleTrend1 from '../Donor/GoogleTrend1';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    alignCenter: {
        justifyContent: "center"
    }
}));

const ApplicantPage = ({userType, setUserType}) => {
    const classes = useStyles();

    const [userPendingPlan, setUserPendingPlan] = React.useState(true)

    const onClickButton = () => {
        setUserType("Home")
    }
    
    const handleSwitch = (event) => {
        setUserPendingPlan(!userPendingPlan)
    }

    return (

        <div>
           <Card style={{ marginTop: '1rem', paddingLeft: 575, marginBottom: '1rem'}}>
           <label>
                <Typography variant='h5'>
                    File Upload
                </Typography>
            </label>
            <Input type="file"/>
            <Button type="submit">Upload</Button> 
            
            <table style={{ marginTop: '1rem', marginBottom: '1rem'}}>
                <tr>
                    <th>No.</th>
                    <th>Files</th>
                    <th>Upload Date</th>
                    <th>Last edited</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><a href="blank">financials.pdf</a></td>
                    <td>20/07/2020</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><a href="blank">assets.pdf</a></td>
                    <td>08/08/2020</td>
                    <td>15/08/2020</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><a href="blank">claims.pdf</a></td>
                    <td>25/09/2020</td>
                    <td>-</td>
                </tr>
            </table>
        
           </Card>

            <div></div>

            <div>
            <FormGroup row className={classes.alignCenter}>
                <FormControlLabel
                    control={
                    <Switch 
                        checked={userPendingPlan} 
                        onChange={handleSwitch} 
                    />
                    }
                    label="Toggle Proposal Status"
                />
            </FormGroup>  
            {userPendingPlan && <ProposalStatus userType={userType} setUserType={setUserType}/>}
            </div>
        
            <ProposalForm />
        </div>
    )
}

export default ApplicantPage;