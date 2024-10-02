import { Box, Button, Card, Divider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import hospitalImage from '../../assets/images/hospital-img.png';
import BookingTabs from '../BookingTabs';

const HospitalInfoCard = ({ hospital }) => {
    const [isBookingTabOpen, setIsBookingTabOpen] = useState(false);

    const formatHospitalAddress = (hospital) => {
        if (!hospital)
            return

        let address = '';

        if (hospital['Address'])
            address += `${hospital['Address']}, `
        if (hospital['City'])
            address += `${hospital['City']}, `
        if (hospital['State'])
            address += `${hospital['State']}, `
        if (hospital['County Name'])
            address += `${hospital['County Name']}, `

        if (hospital['ZIP Code'])
            address += `${hospital['ZIP Code']}`

        return `${address}`;
    }

    return (
        <Card elevation={0}
            sx={{
                borderRadius: 2,
                px: 2,
                flexDirection: 'column',
                width: '100%',
                mb: 2
            }}
        >
            <Grid container spacing={2} my={2}>
                <Grid item size={{ xs: 12, md: 2.5 }}>
                    <Box
                        sx={{
                            width: 'fit-content',
                            height: 'fit-content',
                            bgcolor: '#8CCFFF',
                            borderRadius: 50,
                            border: 0,
                            p: 2,
                            mx: { xs: 'auto', md: 0 }
                        }} >
                        <Box component='img' src={hospitalImage} alt='hospital' />
                    </Box>
                </Grid>
                <Grid item size={{ xs: 12, md: 5.5 }} mt={2} sx={{ textAlign: { xs: 'center', md: 'start' }, }}>
                    <Typography variant="h4" color='primary' fontWeight={600} pb={1}>
                        {hospital['Hospital Name']}
                    </Typography>

                    <Typography variant="body2" fontWeight={700} color='#414146' >
                        {formatHospitalAddress(hospital)}
                    </Typography>

                    <Typography variant='body2' color='#414146'>{hospital['Hospital Ownership']}</Typography>

                    <Typography variant="body2" display='inline' color="success" fontWeight={700}>
                        FREE
                    </Typography>
                    <Typography
                        variant="body2"
                        display='inline'
                        color="#787887"
                        sx={{ textDecoration: "line-through", mx: 1 }}>
                        ₹500
                    </Typography>
                    <Typography variant="body2" color="#414146" display='inline'>
                        Consultation fee at clinic
                    </Typography>

                    <Box
                        sx={{
                            mx: { xs: 'auto', md: 0 },
                            mt: 4,
                            px: 1.5,
                            borderRadius: 2,
                            bgcolor: 'primary.success',
                            width: 'fit-content',
                        }}
                    >
                        <AiFillLike color="white" fontSize={14} style={{ verticalAlign: 'inherit' }} />
                        <Typography variant='body2' display="inline" color="white" ml={0.5}>
                            {hospital['Hospital overall rating']}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item size={{ xs: 12, md: 3.5 }}>
                    <Stack direction='column' spacing={2} height='100%' justifyContent='end' alignItems='center'>

                        <Typography variant='body2' color="primary.success" fontWeight={500}>Available Today</Typography>
                        <Button
                            disableElevation
                            variant='contained'
                            sx={{ whiteSpace: 'nowrap', width: '12rem' }}
                            onClick={() => { setIsBookingTabOpen(!isBookingTabOpen) }}
                        >
                            {isBookingTabOpen ? 'Close Booking Tab' : 'Book FREE Center Visit'}
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
            <Divider sx={{ border: '1px solid #F0F0F5', width: '100%' }} />

            {isBookingTabOpen && <BookingTabs hospital={hospital} />}
        </Card >
    )
}

export default HospitalInfoCard