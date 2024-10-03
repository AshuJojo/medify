import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { MdOutlineVerified } from "react-icons/md";
import HospitalInfoCard from "./cards/HospitalInfoCard";

import axios from "axios";
import { useEffect, useState } from "react";
import ad from '../assets/images/ad.png';
import { BASE_URL } from "../data/constants";

const HospitalList = ({ state, city }) => {
    const [hospitals, setHospitals] = useState([]);

    const fetchHospitals = async (state, city) => {
        try {
            const res = await axios.get(`${BASE_URL}/data?state=${state}&city=${city}`);

            return res.data;
        } catch (e) {
            console.error(e);
            return [];
        }
    }

    useEffect(() => {
        (async () => {
            const data = await fetchHospitals(state, city);

            if (data)
                setHospitals(data);
        })()
    }, [state, city]);

    return (
        <Container sx={{
            display: 'block',
            py: 8
        }}>
            <Typography variant="subtitle1" color="black" fontWeight={500}>
                {hospitals.length} medical centers available in {city}
            </Typography>
            <Typography variant="subtitle2" color="#787887" fontWeight={400}>
                <MdOutlineVerified fontSize={20} color="black" style={{ verticalAlign: 'text-top', marginRight: 5 }} /> <span style={{ verticalAlign: 'text-bottom' }}>Book appointments with minimum wait-time & verified doctor details</span>
            </Typography>

            <Grid container spacing={2} mt={4}>
                <Grid item size={{ xs: 12, md: 8 }}>
                    <Box width='100%'>
                        {hospitals.length > 0 && hospitals.map((hospital) => (
                            <HospitalInfoCard key={hospital['Provider ID']} hospital={hospital} />
                        ))}
                    </Box>
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }}>
                    <Box component='img' src={ad} alt="Ad" width={1} />
                </Grid>
            </Grid>
        </Container >
    )
}

export default HospitalList