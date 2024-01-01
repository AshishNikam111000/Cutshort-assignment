import Check from '@mui/icons-material/Check';
import LensIcon from '@mui/icons-material/Lens';
import SpaIcon from '@mui/icons-material/Spa';
import { Box, Button, Grid, Step, StepConnector, StepLabel, Stepper, Typography, styled } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Step1, Step2, Step3 } from './components/Steps';

export const StateContext = React.createContext(null);

const steps = [
  {
    title: 'Welcome! First things first...',
    description: `You can always change them later.`,
    content: (props) => <StepWrapper {...props}><Step1 /></StepWrapper>,
  },
  {
    title: "Let's set up a home for all your work",
    description: 'You can always create another workspace later.',
    content: (props) => <StepWrapper {...props}><Step2 /></StepWrapper>,
  },
  {
    title: 'How are you planning to use Eden?',
    description: `We'll streamline your setup experience accordingly.`,
    content: (props) => <StepWrapper {...props}><Step3 /></StepWrapper>,
  },
];

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon, .QontoStepIcon-circle': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
}));
function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className="QontoStepIcon-completedIcon" /> : <LensIcon className="QontoStepIcon-circle" />}
    </QontoStepIconRoot>
  );
}
QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

export default function App() {
  const [state, setState] = React.useState(null);
  const update = (value) => setState({...state, ...value})
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleReset = () => {setState(null);setActiveStep(0);}
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  return(
    <StateContext.Provider value={{state, updateState: update}} >
    <Grid container width="100vw" height="100vh" justifyContent="center" alignItems="center" backgroundColor="whitesmoke">
      <Grid container flexDirection="column" gap={2} maxWidth="sm" alignItems='center' backgroundColor="white" py={3} borderRadius={1} >
        <Grid item container maxWidth="fit-content" gap={1} >
          <SpaIcon fontSize='large' sx={{color:"#784af4"}} />
          <Typography variant='h4'>EDEN</Typography>
        </Grid>
        <Grid item container width="40%">
          <Stepper sx={{width:'100%'}} activeStep={activeStep} connector={<StepConnector />}>
            {steps.map((step) => <Step key={step.title}><StepLabel StepIconComponent={QontoStepIcon}></StepLabel></Step>)}
          </Stepper>
        </Grid>
        {activeStep !== steps.length && <>
          <Grid item>{steps.map((step, index) => activeStep === index && <div key={index}>{step.content(step)}</div>)}</Grid>
          <Box>
            <div>
              <Button size='small' disabled={activeStep === 0} onClick={handleBack} sx={{mt: 1, mr: 1, color:"#784af4", ':hover': {color:"#784ae4"}}}>Back</Button>
              <Button size='small' variant="contained" onClick={handleNext} sx={{mt: 1, mr: 1, backgroundColor:"#784af4", ':hover': {backgroundColor:"#784ae4"}}}>{activeStep === steps.length - 1 ? 'Finish' :'Continue'}</Button>
            </div>
          </Box>
        </>}
        {activeStep === steps.length && <>
          <StepWrapper title="Congratualitons," description="You have completed onboarding, you can start using the Eden!." />
          <Button size='small' variant="contained" onClick={handleReset} sx={{mt: 1, mr: 1, backgroundColor:"#784af4", ':hover': {backgroundColor:"#784ae4"}}}>{'Reset'}</Button> 
        </>}
      </Grid>
    </Grid>
    </StateContext.Provider>
  )
}

function StepWrapper({ title, description, children }){
  return (
    <Grid key={title} item container flexDirection="column" alignItems="center">
      <Grid item><Typography variant='h6'>{title}</Typography></Grid>
      <Grid item><Typography variant='subtitle2' color="gray" mb={2} px={2} textAlign="center" >{description}</Typography></Grid>
      {children && <Grid item width={"100%"} >{children}</Grid>}
    </Grid>
  );
}