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
      {/* <AlertBar />

      <Navbar bgColor={'inherit'} shadow={false} />

      <HeroSection />

      <Container
        sx={{ mt: { xs: -10, sm: -14, md: -10 } }}
      >
        <Card sx={{
          py: '2.5rem',
          px: '2.188rem',
          borderRadius: 3.75,

          position: 'relative',
          zIndex: 99
        }}>
          <Stack direction='column' spacing={6}>

            <LocationForm />

            <SearchRecommendation />
          </Stack>
        </Card>
      </Container>

      <OffersSection />

      <Specialisations />

      <DoctorsCarousel />

      <CareSection />

      <BlogSection />

      <StatisticsSection />

      <FAQsSection /> */}

      <DownloadAppSection />
      {/*

      <Footer /> */}
    </>
  )
}

export default Home