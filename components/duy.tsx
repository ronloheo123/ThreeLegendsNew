import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from '@mui/system/styled';
import { AppBar, Grid, Toolbar} from '@mui/material';
import { makeStyles } from "@material-ui/core";

interface Content{
  Title: String;
  Text: String;
  Text2: String;

}
const PricingContent: Content = {
  Title:"Pricing",
  Text:"Most calendars are designed for teams. ",
  Text2:"Slate is designed for freelancers"
}
const Pricing = () =>{
  return(<>
      <Typography variant="h2" color="#252B42" align="center" fontSize="46px" fontStyle={"normal"}
      fontWeight="400" lineHeight="57px" letterSpacing="0.2px">
        {PricingContent.Title}   
      </Typography>
    
      <Typography variant="h4" textAlign={"center"} color="#374754" fontSize="16px" fontStyle={"normal"}
      fontWeight="700" lineHeight="20px" letterSpacing="0.2px">
        {PricingContent.Text}
      </Typography>

      <Typography variant="h4" textAlign={"center"} color="#374754" fontSize="16px" fontStyle={"normal"}
      fontWeight="700" lineHeight="20px" letterSpacing="0.2px">
        {PricingContent.Text2}
      </Typography>

    

  </>)
}
export default Pricing

const Item = () =>{
  return(
    <div style={{ width: '100%' }}>
    <Box
      component="div"
      sx={{
        display: 'inline-block',
        p: "150px",
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      inline
    </Box>
    <Box
      component="div"
      sx={{
        display: 'inline',
        p: "150px",
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      inline
    </Box>
    <Box
      component="div"
      sx={{
        display: 'inline',
        p: "150px",
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      inline
    </Box>
  </div>
  )
    
}
export {Item}








