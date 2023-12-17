import React from "react";
import Typography from '@mui/material/Typography';

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
const PriceContent = () =>{
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
export default PriceContent;











