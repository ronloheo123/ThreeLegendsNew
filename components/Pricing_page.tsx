import React from 'react'
import PriceContent from './TextContent'
import { Box, Container } from '@mui/material'
import Items from './Items';



const Pricing_page = () => {
  return (
    <Container>      
        <PriceContent></PriceContent>
        <Box sx={{pt:"80px"}}>
          <Items></Items>
        </Box>                                   
    </Container>
    

  );
};

export default Pricing_page