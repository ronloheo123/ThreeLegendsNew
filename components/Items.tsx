import { Box, Card, CardContent, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { spacing } from '@mui/system';
import { blue } from '@mui/material/colors';

type Props = {}

const Items = (props: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between">     
        <Card variant='outlined' sx={{width:"230px", alignItems:'flex-start',padding:"40px",borderRadius:"8px"}}>
                     
              <Box>
                <Typography variant="h3" fontSize="22px">
                  Free
                </Typography>
                <Typography variant="h5" fontSize="12px">
                  Organize across all apps by hand
                </Typography>
              </Box>
              <Stack direction="row" >
                <Box sx={{pt:"30px"}}>
                  <Typography variant="h1" fontSize="55px">0</Typography>
                </Box>
                <Box sx={{pl:"10x",pt:"41px"}}>               
                  <Typography variant='h3' fontSize="22px">$</Typography>
                  <Typography variant='h5' fontSize={"12px"}>Per Month</Typography>
                </Box>                
              </Stack>
              <Box sx={{pt:"30px",alignContent:'center'}}>
                <Button variant="contained" style={{width:"100%", backgroundColor:"blue", borderRadius:"28px"}}>
                Order Now
                </Button>

              </Box>
                     
        </Card>

        <Card variant='outlined' sx={{width:"230px", alignItems:'flex-start',padding:"40px",borderRadius:"8px"}}>
                     
              <Box>
                <Typography variant="h3" fontSize="22px">
                  STANDARD
                </Typography>
                <Typography variant="h5" fontSize="12px">
                  Organize across all apps by hand
                </Typography>
              </Box>
              <Stack direction="row" >
                <Box sx={{pt:"30px"}}>
                  <Typography variant="h1" fontSize="55px">10</Typography>
                </Box>
                <Box sx={{pl:"10x",pt:"41px"}}>               
                  <Typography variant='h3' fontSize="22px">$</Typography>
                  <Typography variant='h5' fontSize={"12px"}>Per Month</Typography>
                </Box>                
              </Stack>
              <Box sx={{pt:"30px",alignContent:'center'}}>
                <Button variant="contained" style={{width:"100%", backgroundColor:"blue", borderRadius:"28px"}}>
                Order Now
                </Button>

              </Box>
                     
        </Card>

        <Card variant='outlined' sx={{width:"230px", alignItems:'flex-start',padding:"40px", background:'linear-gradient(to right top, #EF2779, #7834BE)',color:"white",borderRadius:"8px"}}>
                     
              <Box>
                <Typography variant="h3" fontSize="22px">
                  BUSINESS
                </Typography>
                <Typography variant="h5" fontSize="12px">
                  Organize across all apps by hand
                </Typography>
              </Box>
              <Stack direction="row" >
                <Box sx={{pt:"30px"}}>
                  <Typography variant="h1" fontSize="55px">99</Typography>
                </Box>
                <Box sx={{pl:"10x",pt:"41px"}}>               
                  <Typography variant='h3' fontSize="22px">$</Typography>
                  <Typography variant='h5' fontSize={"12px"}>Per Month</Typography>
                </Box>                
              </Stack>
              <Box sx={{pt:"30px",alignContent:'center'}}>
                <Button variant="contained" style={{width:"100%", backgroundColor:"white", borderRadius:"28px", color:"#EF2779"}}>
                Order Now
                </Button> 

              </Box>
                     
        </Card>
       
    </Stack>
  )
}

export default Items