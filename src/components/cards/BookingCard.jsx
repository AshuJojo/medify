import { Card, CardActions, CardContent, Box, Typography } from '@mui/material';

import { AiFillLike } from "react-icons/ai"
import hospitalImage from '../../assets/images/hospital-img.png';
import { useEffect, useState } from 'react';
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
        <Card elevation={0} sx={{ borderRadius: 2, px: 2, mb: 2, flexDirection: 'column', width: 'auto' }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Box sx={{
                    bgcolor: '#8CCFFF',
                    padding: 2.5,
                    borderRadius: 50,
                    ml: 2,
                    my: 4,
                    height: 'fit-content',
                    marginBottom: 'auto'
                }}>
                    <img src={hospitalImage} alt="Hospital" style={{ height: 50, width: 50 }} />
                </Box>
                <CardContent
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        mt: 4,
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h6" color='primary' fontWeight={600} pb={1}>
                            {hospital['Hospital Name']}
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={700} >
                            {formatHospitalAddress(hospital)}
                        </Typography>
                        <Typography>{hospital['Hospital Ownership']}</Typography>

                        <Box
                            sx={{
                                mt: 4,
                                px: 1.5,
                                pt: 0.5,
                                borderRadius: 2,
                                bgcolor: '#00A500',
                                width: 'fit-content',
                                mb: 2,
                            }}
                        >
                            <AiFillLike color="white" style={{ verticalAlign: 'inherit' }} />
                            <Typography display="inline" color="white" ml={0.5}>
                                {hospital['Hospital overall rating']}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions sx={{ marginBottom: 'auto' }}>

                    <Box sx={{ display: 'flex', gap: 2, mt: 5 }}>
                        <Typography color="primary" sx={{
                            border: '1px solid #2AA7FF',
                            py: 0.5,
                            px: 1.5,
                            borderRadius: 1,
                            whiteSpace: 'nowrap'
                        }}>{getTimeFromDateObj(date)}</Typography>
                        <Typography color="success" sx={{
                            border: '1px solid #007100',
                            py: 0.5,
                            px: 1.5,
                            borderRadius: 1, whiteSpace: 'nowrap'
                        }}>{getDateFromDateObjWithoutWeekday(date)}</Typography>
                    </Box>
                </CardActions>
            </Box>
        </Card>
    )
}

export default BookingCard