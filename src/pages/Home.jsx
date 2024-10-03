import { Card, Container, Stack } from "@mui/material"
import AlertBar from "../components/AlertBar"
import DoctorsCarousel from "../components/DoctorsCarousel"
import Footer from "../components/Footer"
import LocationForm from "../components/forms/LocationForm"
import Navbar from "../components/Navbar"
import SearchRecommendation from "../components/SearchRecommendation"
import BlogSection from "../components/sections/BlogSection"
import CareSection from "../components/sections/CareSection"
import DownloadAppSection from "../components/sections/DownloadAppSection"
import FAQsSection from "../components/sections/FAQsSection"
import HeroSection from "../components/sections/HeroSection"
import OffersSection from "../components/sections/OffersSection"
import StatisticsSection from "../components/sections/StatisticsSection"
import Specialisations from "../components/Specialisations"

const Home = () => {

  return (
    <>
      <AlertBar />

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

      <FAQsSection />
      
      <DownloadAppSection />

      <Footer />
    </>
  )
}

export default Home