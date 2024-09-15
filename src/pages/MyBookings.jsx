import { Box, Card, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import AlertBar from "../components/AlertBar"
import BookedHospitalList from "../components/BookedHospitalList"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import HospitalSearchForm from "../components/forms/HospitalSearchForm"
import DownloadAppSection from "../components/sections/DownloadAppSection"

const MyBookings = () => {
  const [bookedHospitals, setBookedHospitals] = useState([]);
  const [bookingDatesJSON, setBookingDatesJSON] = useState([]);
  const [filteredHospitals, setFilteredHospital] = useState([]);
  const [filteredDates, setFilteredDates] = useState([]);

  useEffect(() => {
    const bookingDates = bookingDatesJSON.filter((dates) => {
      return filteredHospitals.findIndex((hospital) => (hospital['Provider ID'] === dates.substring(0, 6))) !== -1;
    })
    
    setFilteredDates(bookingDates);
    
  }, [filteredHospitals]);
  
  useEffect(() => {
    const storedHospitals = JSON.parse(localStorage.getItem("hospitals") || '[]');
    
    setBookedHospitals(storedHospitals);
    setFilteredHospital(storedHospitals);
    
    const storedBookingDates = JSON.parse(localStorage.getItem("bookings") || '[]');
    
    setBookingDatesJSON(storedBookingDates);
    setFilteredDates(storedBookingDates)
  }, [])

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


      <Container sx={{ pt: 2, alignItems: 'start' }}>
        <Typography variant="h4" width={'50%'} color="white" fontWeight={700} sx={{ p: 2 }}>My Bookings</Typography>
        <Card elevation={0} sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: '6px 6px 35px 0px #1028511C',
          mt: 4
        }}>
          <HospitalSearchForm bookedHospitals={bookedHospitals} setFilteredHospital={setFilteredHospital} />
        </Card>
      </Container>

      <BookedHospitalList bookedHospitals={filteredHospitals} bookingDatesJSON={filteredDates} />

      <DownloadAppSection />

      <Footer />
    </>
  )
}

export default MyBookings