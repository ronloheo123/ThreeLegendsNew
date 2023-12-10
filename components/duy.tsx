import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar, Toolbar} from '@mui/material';
import { makeStyles } from "@material-ui/core";
export const Pricing = () =>{
    return <>
    <Typography variant="h2" color="#252B42" align="center" fontSize="46px" fontStyle={"normal"}
    fontWeight="400" lineHeight="57px" letterSpacing="0.2px">
    Pricing
    </Typography>
    
    <Typography variant="h4" textAlign={"center"} color="#374754" fontSize="16px" fontStyle={"normal"}
    fontWeight="700" lineHeight="20px" letterSpacing="0.2px">
    Most calendars are designed for teams. 
    </Typography>

    <Typography variant="h4" textAlign={"center"} color="#374754" fontSize="16px" fontStyle={"normal"}
    fontWeight="700" lineHeight="20px" letterSpacing="0.2px">
    Slate is designed for freelancers
    </Typography>

  </>
}

const Item = () =>{
  return<>

  </>
}
export {Item}






