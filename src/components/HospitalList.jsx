import { Box, Container, Typography } from "@mui/material"
import { MdOutlineVerified } from "react-icons/md";
import HospitalInfoCard from "./cards/HospitalInfoCard";

import ad from '../assets/images/ad.png'

const HospitalList = () => {
    return (
        <Container sx={{
            display: 'block',
            py: 8
        }}>
            <Typography variant="h6">
                15 medical centers available in Alaska
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
                <Box sx={{ width: '70%' }}>
                    <HospitalInfoCard />
                </Box>
                <Box sx={{ width: '30%', float: 'right' }}>
                    <img src={ad} alt="Sensodyne ad" />
                </Box>
            </Box>
        </Container >
    )
}

export default HospitalList