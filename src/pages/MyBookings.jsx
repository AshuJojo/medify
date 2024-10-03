import { Box, Card, Container, Stack, Typography } from "@mui/material"
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
          py: { xs: 10, md: 6 },
          borderRadius: '0 0 1rem 1rem',
          position: 'absolute',
          top: 100,
          zIndex: -1
        }}
      />

      <Container sx={{ alignItems: 'start', mt: { xs: 2, md: 3 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 6 }} >
          <Typography variant="h3" color="white" fontWeight={700} textAlign={{ xs: 'center', md: 'start' }}>My Bookings</Typography>
          <Card elevation={0} sx={{ py: 3, px: 2, borderRadius: 2, flexGrow: 1, }}>
            <HospitalSearchForm bookedHospitals={bookedHospitals} setFilteredHospital={setFilteredHospital} />
          </Card>
        </Stack>
      </Container >

      <BookedHospitalList bookedHospitals={filteredHospitals} bookingDatesJSON={filteredDates} />

      <DownloadAppSection />

      <Footer />
    </>
  )
}

export default MyBookings