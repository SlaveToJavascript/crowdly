import React, { useEffect, useState, useLayoutEffect } from 'react'
// import reactDom from 'react-dom'
import { Grid } from '@material-ui/core'

import NewsCardDemo from './Card'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {datas} from './data'
const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });


function ScrollDialog() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    return (
        <div>
        <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
        <Button onClick={handleClickOpen('body')}>scroll=body</Button>
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
                <b> Business Name: </b> 
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Subscribe
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
  
  


export default function AllPlans(){
    const classes = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);
    const items = datas;

    // useEffect(() => {
    // fetch("http://0.0.0.0:8100/getAllProjects")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setItems(result);
    //       console.log(result);
    //       for (const [key, value] of Object.entries(result)) {
    //         console.log(`${key}: ${value.name}`);
    //       }
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   )
    // }, []
    // )
    return (
        <>
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", paddingTop: "2%", paddingBottom: "2%"}}>
        <Typography variant="h3" className={classes.appTitle}>Help these projects reach their goals!</Typography>
        </div>
        <Grid container spacing={4} justify="center" className={classes.gridContainer}> 
            {
                items.map((row) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <NewsCardDemo key={row.id} id={row.id} name={row.name} date={row.date} body={row.summary} raised={row.raised}
                        total={row.total} image={row.image}/>
                    </Grid>
                ))
                
            }
        </Grid>
        </>
    )
}
