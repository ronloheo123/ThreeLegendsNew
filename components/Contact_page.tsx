import { Box, Container } from '@mui/material'
import React from 'react'
import ContactContent from './ContactContent'

const Contact = () => {
  return (
    <Container sx={{backgroundColor:"#252B42", pt:"50px"}} >
      <ContactContent></ContactContent>
    </Container>
  )
}

export default Contact