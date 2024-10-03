import { Box, Button, Modal, Stack, Typography } from "@mui/material";
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
            <Stack direction='column' spacing={2} sx={{bgcolor: 'white', p: 4, mx: 2, maxWidth: 700, borderRadius: 2}}>
                <Typography variant="h4" color="primary">
                    Confirm Booking
                </Typography>
                <Typography variant="body2" fontSize={18}>
                    Are you sure you sure that you want to book your appointment on <span style={{ fontWeight: 'bold' }}>{date}</span> at <span style={{ fontWeight: 'bold' }}>{time}</span>?
                </Typography>
                <Box width='100%' sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    gap: 2,
                    mt: 2
                }}>
                    <Button variant="contained" onClick={handleConfirmBooking}>Yes</Button>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                </Box>
            </Stack>
        </Modal>
    )
}

export default BookingConfirmModal