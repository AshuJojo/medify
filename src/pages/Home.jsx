import AlertBar from "../components/AlertBar"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <AlertBar />
      <Navbar bgColor={'inherit'} shadow={false} />
      <HeroSection />
    </>
  )
}

export default Home