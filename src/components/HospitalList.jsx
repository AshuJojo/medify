import { Box, Container, Typography } from "@mui/material"
import { MdOutlineVerified } from "react-icons/md";
import HospitalInfoCard from "./cards/HospitalInfoCard";

import ad from '../assets/images/ad.png'
import { useEffect, useState } from "react";
import axios from "axios";
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

            console.log('hospitals', data);
            if (data)
                setHospitals(data);
        })()
    }, [state, city]);

    return (
        <Container sx={{
            display: 'block',
            py: 8
        }}>
            <Typography variant="h6">
                {hospitals.length} medical centers available in {state}
            </Typography>
            <Typography color="#787887">
                <MdOutlineVerified fontSize={20} color="black" style={{ verticalAlign: 'text-top', marginRight: 5 }} /> <span style={{ verticalAlign: 'text-bottom' }}>Book appointments with minimum wait-time & verified doctor details</span>
            </Typography>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 4,
                    mt: 4
                }}
            >
                <Box sx={{
                    width: '70%',
                    flexBasis: '70%',
                    flexGrow: 0,
                    flexShrink: 0
                }}>
                    {hospitals.length > 0 && hospitals.map((hospital) => (
                        <HospitalInfoCard key={hospital['Provider ID']} hospital={hospital} />
                    ))}
                </Box>
                <Box sx={{
                    width: '28%',
                    float: 'right',
                    flexBasis: '28%',
                    flexGrow: 0,
                    flexShrink: 0
                }}>
                    <img src={ad} alt="Sensodyne ad" width="100%" />
                </Box>
            </Box>
        </Container >
    )
}

export default HospitalList