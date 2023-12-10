import React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";


const theme = createTheme({
  palette: {
    backgroundGradient: {
      main: "linear-gradient(40deg, #EF2779 0.79%, #7834BE 79.29%)",
    },
  },
});

const useStyles = makeStyles({
  root: {
    background: theme.palette.backgroundGradient.main,
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const MyComponent1 = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box className={classes.root}>this is my page</Box>
      </Box>
    </ThemeProvider>
  );
};

export { MyComponent1 };