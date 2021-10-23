import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';
import './style.css';

const ProposalStatus = ({userType, setUserType}) => {

    const onClickButton = () => {
        setUserType("Home")
    }

    // APIAlert
    const mockPlanStatus = {
        "Building a hospital": "Pending",
        "Building a school": "Rejected",
        "Empowering women": "Approved",
    }

    return (
        <div>
            <Card>
            <table style={{marginLeft: '40%', marginTop: '1rem', marginBottom: '1rem'}}>
                <tr>
                    <th>Business Title</th>
                    <th>Status</th>
                </tr>
            
            {Object.keys(mockPlanStatus).map(function(k, v) {
                return (
                    <>
                    
                        {/* {k} : {mockPlanStatus[k]} */}

                       
                            <tr>
                                <td>{k}</td>
                                <td>{mockPlanStatus[k]}</td>
                            </tr>

                    
                    </>
                )
            })
            }
            {/* <button onClick={onClickButton}>Back to Home Page</button> */}
            </table>
            </Card>
            
        </div>
    )
}

export default ProposalStatus;