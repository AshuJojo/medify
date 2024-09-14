import { Box, Button, Modal, Typography } from "@mui/material"

const BookingConfirmModal = ({ isOpen, handleClose, bookingDate, bookingTime }) => {

    // const date = new Date(bookingDate);

    const handleBookingConfirm = () => {
        const dateTimeStr = `${bookingDate} ${bookingTime}`;
        const date = new Date(dateTimeStr);

        const dateStr = JSON.stringify(date);
        const retrieveDate = new Date(JSON.parse(dateStr));

        console.log('retrieveDate', retrieveDate)
        handleClose();
    }

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
                    Are you sure you sure that you want to book your appointment on <span style={{ fontWeight: 'bold' }}>{bookingDate}</span> at <span style={{ fontWeight: 'bold' }}>{bookingTime}</span>?
                </Typography>
                <Box width='100%' sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    gap: 2,
                    mt: 2
                }}>
                    <Button onClick={handleBookingConfirm}>Yes</Button>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default BookingConfirmModal