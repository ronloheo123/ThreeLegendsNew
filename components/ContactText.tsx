import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'




const ContactText = () => {
  return (
    <Box>
    <Typography variant="h2" fontSize="46px" textAlign='center' color="white">
        Contact Us
    </Typography>
    <Typography variant="h4" fontSize="16px" textAlign='center' color="white">
        Most calendars are designed for teams.
    </Typography>
    <Typography variant="h4" fontSize="16px" textAlign='center' color="white">
        Slate is designed for freelancers
    </Typography>
        
    </Box>
  )
}

export default ContactText