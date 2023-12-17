import React from 'react'
import ContactText from './ContactText'
import { Box, Stack } from '@mui/material'
import ContactRow from './ContactRow'


const ContactContent = () => {
  return (
    <Box>
        <Box>
            <ContactText></ContactText>
        </Box>
        <Box pt="50px">
            <ContactRow></ContactRow>
        </Box>
    </Box>
  )
}

export default ContactContent