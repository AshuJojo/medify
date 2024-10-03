import { Box, Container } from "@mui/material"
import Grid from '@mui/material/Grid2'
import ad from '../assets/images/ad.png'
import BookingCard from "./cards/BookingCard"

const BookedHospitalList = ({ bookedHospitals, bookingDatesJSON }) => {
    return (
        <Container sx={{
            display: 'block',
        }}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 4,
                    mt: 4
                }}
            >

                <Grid container spacing={2} mt={4}>
                    <Grid item size={{ xs: 12, md: 8 }}>
                        <Box width='100%'>
                            {bookingDatesJSON.length > 0 && bookingDatesJSON.map((bookingDate) => (
                                <BookingCard key={bookingDate} hospitals={bookedHospitals} bookingDateJSON={bookingDate} />
                            ))}
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Box component='img' src={ad} alt="Ad" width={1} />
                    </Grid>
                </Grid>

            </Box>
        </Container >
    )
}

export default BookedHospitalList