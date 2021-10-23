import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import LinearProgress from '@material-ui/core/LinearProgress'; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import GoogleTrend from './GoogleTrend';
import GoogleTrend1 from './GoogleTrend1';
import GoogleTrend2 from './GoogleTrend2';
import GoogleTrend3 from './GoogleTrend3';
import { withStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 485,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));


function Details(props){
  const handleClose = (e) => {
    console.log(e);
    props.setOpen(false);


  };
const descriptionElementRef = React.useRef(null);

function getTrend(id){
  console.log("id is>")
  console.log(id);
  if (id == 1){
    return <GoogleTrend />;
  } else if (id == 2) {
    return <GoogleTrend1 />;
  } else if (id == 3) {
    return <GoogleTrend2 />;
  } else {
    return <GoogleTrend3 />;
  }


}


  return (
    <Dialog
      open={props.open}
      // onClose={(e)=>handleClose(e)}
      scroll='paper'
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      maxWidth= 'lg'
  >
      <DialogTitle id="scroll-dialog-title">Details</DialogTitle>
      <DialogContent dividers={true}>
      <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
      >
        {/* <Typography variant="h5">Intro</Typography> */}
        <div>
        <p>
          <h2>Intro</h2>
        </p>
          <table>
            <tr><td><b> Business Name: </b></td> <td>{props.name} </td></tr>
            <tr><td><b> Objectives: </b></td> <td>{props.body} </td></tr>
            <tr><td><b> Funding: </b></td> <td>${props.raised} / ${props.total} </td></tr>
          </table>
        </div>
        <p>
          <h2>Hear from the founders</h2>
        </p>
        <div>
          <b>What impact do you hope to bring from your Business?</b> <br/>
          {props.body}
          <br/><br/>
          <b>Identify your target audience and explain your rationale for choosing them?</b> <br/>
          The residents of our community are in dire need of this service. We plan to make this service available to everyone for a low cost for a better future. 
          They are struggling and are with minimal help from the government. Most of them are uneducated and are unable to get loans from banks in order to improve their lifestyle. 
          
          <br/><br/>
          <b>How do you intend to make use of the crowdsourced money?</b> <br/>
          The crowdsourced money will be used to build infrastructure to provide our services at a very low cost. As dedicated founders, we will make sure that the 
          money is allocated in the right resources and will update you guys on our progress. Please help our mission, thank you!
        </div>
        <p>
          <h2>Needs Identification from Google Trends</h2>
        </p>
        
      {getTrend(props.id)}
      </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button onClick={(e)=> handleClose(e)} color="primary">
          Cancel
      </Button>
      <Button onClick={handleClose} color="primary">
          CrowdFund!
      </Button>
      </DialogActions>
  </Dialog>
  )
}
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 5,
    paddingTop: '56.25%', // 16:9
  },
};

function NewsCardDemo (props) {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();

  // For Modal
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const handleClickOpen = () => () => {
      setOpen(true);
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
    <Card variant="outlined" raised={true} className={cx(styles.root, shadowStyles.root)}>
      {console.log("../../../static/images/" + props.image + ".jpg")}
      <CardMedia
        classes={mediaStyles}
        image={
          props.image
        }
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={props.date}
          heading={props.name}
          body={
            props.body
          }
        />
        <div >
        <LinearProgress variant="determinate" value={(props.raised/props.total)*100} style={{'height': 15, 'borderRadius': 10, 'marginTop': 10}}/>
        <text align="center">Reached ${props.raised} of ${props.total}</text>

        </div>
        
        <Button onClick={handleClickOpen()} color={'primary'} fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </Button>
      </CardContent>
      <Details id={props.id}  open={open} setOpen={setOpen} body={props.body} name={props.name} raised={props.raised} total={props.total} date={props.date}/>
    </Card>
  );
};

export default withStyles(styles)(NewsCardDemo)