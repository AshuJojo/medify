import { Box, Card, Container, Typography } from "@mui/material"
import AlertBar from "../components/AlertBar"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import LocationForm from "../components/forms/LocationForm"
import SearchRecommendation from "../components/SearchRecommendation"

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
    </>
  )
}

export default Home