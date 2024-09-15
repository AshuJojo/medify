import { Box, Button, Modal, Typography } from "@mui/material"
import { getDateFromDateObj, getTimeFromDateObj } from "../utils/DateHelper";

const BookingConfirmModal = ({ isOpen, handleClose, bookingDateJSON, handleConfirmBooking }) => {


    console.log('bookingDateJSON', bookingDateJSON);

    const bookingDate = new Date(JSON.parse(`"${bookingDateJSON}"`));

    const date = getDateFromDateObj(bookingDate);
    const time = getTimeFromDateObj(bookingDate);

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
            sx={{

                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                border: 0,
            }}
        >
            <Box bgcolor='white' sx={{
                p: 4,
                outline: 'none',
                width: '40%',
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Confirm Booking
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Are you sure you sure that you want to book your appointment on <span style={{ fontWeight: 'bold' }}>{date}</span> at <span style={{ fontWeight: 'bold' }}>{time}</span>?
                </Typography>
                <Box width='100%' sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    gap: 2,
                    mt: 2
                }}>
                    <Button onClick={handleConfirmBooking}>Yes</Button>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default BookingConfirmModal