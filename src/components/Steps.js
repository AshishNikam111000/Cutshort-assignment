import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import { Grid, Input, InputAdornment, Typography } from "@mui/material";
import React from "react";
import { StateContext } from '../App';

export function Step1() {
  const {state, updateState} = React.useContext(StateContext)

  return (
    <Grid width="inherit" item container flexDirection="column" justifyContent="center" alignItems="center" gap={3}>
      <Input name="name" value={state?.name} onChange={e => updateState({name: e.target.value})} fullWidth placeholder="Full Name" sx={{':before, :after': { borderBottomColor: '#000' }}} />
      <Input name="email" value={state?.email} onChange={e => updateState({email: e.target.value})} fullWidth placeholder="Email" sx={{':before, :after': { borderBottomColor: '#000' }}} />
    </Grid>
  );
}

export function Step2() {
  const {state, updateState} = React.useContext(StateContext)

  return (
    <Grid width="inherit" item container flexDirection="column" justifyContent="center" alignItems="center" gap={3}>
      <Input name="workspaceName" value={state?.workspaceName} onChange={e => updateState({workspaceName: e.target.value})} fullWidth placeholder="Workspace Name" sx={{':before, :after': { borderBottomColor: '#000' }}} />
      <Input name="workspaceUrl" value={state?.workspaceUrl} onChange={e => updateState({workspaceUrl: e.target.value})} fullWidth placeholder="Workspace Url (Optional)" startAdornment={<InputAdornment position="start">www.eden.com/</InputAdornment>}
       sx={{
        ':before, :after': { borderBottomColor: '#000' },
        '& .MuiInputAdornment-positionStart>p': {backgroundColor:'#94A3B8', borderRadius: '3px', padding:"2px 10px 2px 10px"}
      }}/>
    </Grid>
  );
}

export function Step3() {
  const {state, updateState} = React.useContext(StateContext)
  const handleClick = event => updateState({type:event.target.id})

  return (
    <Grid item container flexDirection='row' justifyContent="center" alignItems="center" gap={1}>
      <Grid id="type1" width="40%" item container flexDirection='column' justifyContent="inherit" alignItems="inherit" border={1} borderColor="gray" borderRadius={1} padding="10px" onClick={handleClick}
        sx={{
          cursor:"pointer",
          borderColor: state?.type === "type1" && "#784af4", "&>svg": {fill: state?.type === "type1" && "#784af4"},
          ":hover": {borderColor: "#784af4", "&>svg": {fill:"#784af4"}},
        }}
      >
        <PersonIcon id="type1" onClick={handleClick} />
        <Typography id="type1" variant="overline" sx={{fontWeight: 700}} onClick={handleClick} >For Myself</Typography>
        <Typography id="type1" variant="caption" onClick={handleClick} >Write better. Think more clearly. Stay organized.</Typography>
      </Grid>
      <Grid id="type2" width="40%" item container flexDirection='column' justifyContent="inherit" alignItems="inherit" border={1} borderColor="gray" borderRadius={1} padding="10px" onClick={handleClick}
        sx={{
          cursor:"pointer",
          borderColor: state?.type === "type2" && "#784af4", "&>svg": {fill: state?.type === "type2" && "#784af4"},
          ":hover": {borderColor: "#784af4", "&>svg": {fill:"#784af4"}},
        }}
      >
        <GroupsIcon id="type2" onClick={handleClick} />
        <Typography id="type2" variant="overline" sx={{fontWeight: 700}} onClick={handleClick} >With my team</Typography>
        <Typography id="type2" variant="caption" onClick={handleClick} >Wikis, docs, tasks & projects, all in one place.</Typography>
      </Grid>
    </Grid>
  );
}