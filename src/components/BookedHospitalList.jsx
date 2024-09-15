import { Box, Container } from "@mui/material"
import ad from '../assets/images/ad.png'
import BookingCard from "./cards/BookingCard"

const BookedHospitalList = ({ bookedHospitals, bookingDatesJSON }) => {
    return (
        <Container sx={{
            display: 'block',
            py: 8
        }}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 4,
                    mt: 4
                }}
            >
                <Box sx={{
                    width: '70%',
                    flexBasis: '70%',
                    flexGrow: 0,
                    flexShrink: 0,
                }}>
                    {bookingDatesJSON.length > 0 && bookingDatesJSON.map((bookingDate) => (
                        <BookingCard key={bookingDate} hospitals={bookedHospitals} bookingDateJSON={bookingDate} />
                    ))}
                </Box>
                <Box sx={{
                    width: '28%',
                    float: 'right',
                    flexBasis: '28%',
                    flexGrow: 0,
                    flexShrink: 0
                }}>
                    <img src={ad} alt="Sensodyne ad" width="100%" />
                </Box>
            </Box>
        </Container >
    )
}

export default BookedHospitalList