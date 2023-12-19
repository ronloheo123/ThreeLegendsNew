import { Box, Stack, TextField, Button, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image'


const ContactRow = () => {
    return (

        <Grid container spacing={10}>
            <Grid item xs={7}>
                <Box sx={{ backgroundColor: 'white', borderRadius: '8px' }}>
                    <Box>
                        <TextField
                            id="Ten"
                            label="Your Name"
                            variant='outlined'
                        />
                    </Box>

                    <Box>
                        <TextField
                            id="Mail"
                            label="Your Email"
                            variant='outlined'
                        />
                    </Box>

                    <Box>
                        <TextField
                            id="Tin"
                            label="Your Message"
                            variant='outlined'
                        />
                    </Box>

                    <Box>
                        <Button variant="contained" style={{ backgroundColor: '#EF2779', color: 'white', borderRadius: '35px' }}>
                            Send
                        </Button>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={5}>
                <Box color={'white'}>
                    <Image
                        src="/Icon/Mark.svg"
                        alt="mark"
                        width={26}
                        height={32}
                    />
                    6386 Spring St undefined Anchorage,
                    Georgia 12473 United States
                </Box>
                <Box color={'white'}>
                    <Image
                        src="/Icon/Phone.svg"
                        alt="mark"
                        width={26}
                        height={32}
                    />
                    (843) 555-0130
                </Box>
                <Box color={'white'}>
                    <Image
                        src="/Icon/Mail.svg"
                        alt="mark"
                        width={27}
                        height={22}
                    />
                    willie.jennings@example.com
                </Box>
                <Box>
                    <Image
                        src="/Icon/social media.svg"
                        alt="mark"
                        width={140}
                        height={50}                       
                    />
                </Box>

            </Grid>
        </Grid>
    )
}

export default ContactRow