import { Card, Container } from "@mui/material"
import AlertBar from "../components/AlertBar"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import LocationForm from "../components/forms/LocationForm"

const Home = () => {
  return (
    <>
      <AlertBar />
      <Navbar bgColor={'inherit'} shadow={false} />
      <HeroSection />
      <Container>
        <Card sx={{
          py: '3.375rem',
          px: '2.188rem',
          borderRadius: 3.75
        }}>
          <LocationForm />
          
        </Card>
      </Container>
    </>
  )
}

export default Home