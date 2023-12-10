import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  header: {
  background: 'linear-gradient(to right,#EF2779 0.79%, #7834BE 79.29%)',height: '100vh'
 },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <Toolbar>
        
      </Toolbar>
    </AppBar>
  );
}