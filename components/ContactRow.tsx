import { Box, Stack, TextField, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image'


const ContactRow = () => {
    return (

        <Stack direction="row">
            <Stack direction="column" >
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
            </Stack>
            <Stack>
                <Image                    
                    src={`/Icon/${}.svg`}
                    alt=""
                    width={122}
                    height={123}
                />


            </Stack>
        </Stack>
    )
}

export default ContactRow