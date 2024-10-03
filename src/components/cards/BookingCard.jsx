import { Box, Card, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { useEffect, useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import hospitalImage from '../../assets/images/hospital-img.png';
import { getDateFromDateObjWithoutWeekday, getTimeFromDateObj } from '../../utils/DateHelper';

const BookingCard = ({ hospitals, bookingDateJSON }) => {
    const [hospital, setHospital] = useState(null);
    const date = new Date(JSON.parse(`"${bookingDateJSON.substring(6)}"`));

    console.log('date', date)

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

    const getHospitalFromDateJSON = (dateJSON) => {
        const hospitalId = dateJSON.substring(0, 6);
        console.log('id', hospitalId);

        const data = hospitals.find((item) => (item['Provider ID'] == hospitalId.toString()));

        return data;
    }

    useEffect(() => {
        const data = getHospitalFromDateJSON(bookingDateJSON);
        setHospital(data);
    }, []);

    if (!hospital) {
        return <></>
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
                    <Stack
                        direction={{ xs: 'row', md: 'column' }}
                        spacing={2}
                        justifyContent={{ xs: 'center', md: 'start' }}
                        alignItems='center'
                        textAlign='center'
                        mt={2}
                    >
                        <Box>
                            <Typography variant='body2' color="primary" sx={{
                                border: '1px solid #2AA7FF',
                                py: 0.5,
                                px: 1.5,
                                borderRadius: 1,
                                whiteSpace: 'nowrap'
                            }}>{getTimeFromDateObj(date)}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body2' fontWeight={700} color="primary.success"
                                sx={{
                                    border: '1px solid #007100',
                                    py: 0.5,
                                    px: 1.5,
                                    borderRadius: 1,
                                    whiteSpace: 'nowrap',
                                }}>{getDateFromDateObjWithoutWeekday(date)}</Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid >
        </Card >
    )
}

export default BookingCard