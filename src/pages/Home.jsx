import { Box, Card, Container, Typography } from "@mui/material"
import AlertBar from "../components/AlertBar"
import HeroSection from "../components/sections/HeroSection"
import Navbar from "../components/Navbar"
import LocationForm from "../components/forms/LocationForm"
import SearchRecommendation from "../components/SearchRecommendation"
import OffersSection from "../components/sections/OffersSection"
import Specialisations from "../components/Specialisations"
import DoctorsCarousel from "../components/DoctorsCarousel"

const Home = () => {

  return (
    <>
      <AlertBar />
      <Navbar bgColor={'inherit'} shadow={false} />
      <HeroSection />
      <Container>
        <Card sx={{
          py: '2.5rem',
          px: '2.188rem',
          borderRadius: 3.75,

          flexDirection: 'column',
          gap: '2rem'
        }}>
          <LocationForm />

          <Box width="100%">
            <Typography variant="h6" textAlign={'center'}>You may be looking for</Typography>
            <SearchRecommendation />
          </Box>
        </Card>
      </Container>

      <Box
        sx={{
          backgroundColor: 'white',
          pt: '8rem',
          mt: '-5rem',
        }}
      >
        <OffersSection />
      </Box>

      <Container sx={{ pb: 6, flexDirection: 'column' }}>
        <Typography variant="h3" fontWeight={600} py='3.5rem'>Find By Specialisation</Typography>

        <Box sx={{ width: '100%' }}>
          <Specialisations />
        </Box>
      </Container>

      <Box sx={{ backgroundColor: '#ffffff' }}>
        <Typography
          variant="h3"
          fontWeight={600}
          py='3.5rem'
          textAlign={'center'}
        >
          Our Medical Specialist
        </Typography>

        <Box sx={{ width: '100%' }}>
          <DoctorsCarousel />
        </Box>
      </Box>
    </>
  )
}

export default Home