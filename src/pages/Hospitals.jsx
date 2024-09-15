import { Box, Card, Container, Typography } from "@mui/material"
import AlertBar from "../components/AlertBar"
import Footer from "../components/Footer"
import LocationForm from "../components/forms/LocationForm"
import Navbar from "../components/Navbar"
import DownloadAppSection from "../components/sections/DownloadAppSection"
import FAQsSection from "../components/sections/FAQsSection"

import HospitalList from "../components/HospitalList"
import { useLocation } from "react-router-dom"

const Hospitals = () => {
    const location = useLocation();

    const urlSearchParams = new URLSearchParams(location.search);

    const state = urlSearchParams.get('state')
    const city = urlSearchParams.get('city')

    return (
        <>
            <AlertBar />
            <Navbar shadow={false} />
            <Box
                sx={{
                    width: '100%',
                    background: 'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)',
                    py: 6,
                    borderRadius: '0 0 1rem 1rem',
                    position: 'absolute',
                    top: 100,
                    zIndex: -1
                }}
            >
            </Box>

            <Container sx={{ pt: 6 }}>
                <Card elevation={0} sx={{
                    p: 3, borderRadius: 2, boxShadow: '6px 6px 35px 0px #1028511C'
                }}>
                    <LocationForm />
                </Card>
            </Container>

            {state && city && <HospitalList state={state} city={city} />}
            {!state && !city &&
                <Container sx={{justifyContent: 'start', alignItems: 'start', pt: 5, minHeight: 300}}>
                    <Typography variant="h5" fontWeight={600}>No Hospital Found!!!</Typography>
                </Container>
            }

            <Box sx={{ bgcolor: "white", py: '3rem' }}>
                <FAQsSection />
            </Box>

            <DownloadAppSection />

            <Footer />
        </>
    )
}

export default Hospitals