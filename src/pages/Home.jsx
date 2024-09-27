import { Box, Card, Container, Stack, Typography } from "@mui/material"
import AlertBar from "../components/AlertBar"
import HeroSection from "../components/sections/HeroSection"
import Navbar from "../components/Navbar"
import LocationForm from "../components/forms/LocationForm"
import SearchRecommendation from "../components/SearchRecommendation"
import OffersSection from "../components/sections/OffersSection"
import Specialisations from "../components/Specialisations"
import DoctorsCarousel from "../components/DoctorsCarousel"
import CareSection from "../components/sections/CareSection"
import BlogSection from "../components/sections/BlogSection"
import StatisticsSection from "../components/sections/StatisticsSection"
import FAQsSection from "../components/sections/FAQsSection"
import DownloadAppSection from "../components/sections/DownloadAppSection"
import Footer from "../components/Footer"



const Home = () => {

  return (
    <>
      {/* <AlertBar /> */}
      <Navbar bgColor={'inherit'} shadow={false} />
      {/* <HeroSection /> */}
      <Container
        // sx={{ mt: { xs: -10, sm: -14, md: -10 } }}
      >
        <Card sx={{
          py: '2.5rem',
          px: '2.188rem',
          borderRadius: 3.75,

          position: 'relative',
          zIndex: 99
        }}>
          <Stack direction='column' spacing={4}>
            <LocationForm />

            <Box width="100%">
              <Typography variant="h6" textAlign={'center'}>You may be looking for</Typography>
              <SearchRecommendation />
            </Box>
          </Stack>
        </Card>
      </Container>

      {/* <Box
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

      <Box sx={{ backgroundColor: '#ffffff', pb: 4 }}>
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
      <CareSection />

      <Box sx={{ bgcolor: "white", py: '3rem' }}>
        <BlogSection />
      </Box>

      <StatisticsSection />

      <Box sx={{ bgcolor: "white", py: '3rem' }}>
        <FAQsSection />
      </Box>

      <DownloadAppSection />

      <Footer /> */}
    </>
  )
}

export default Home