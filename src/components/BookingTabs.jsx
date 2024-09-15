import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import BookingConfirmModal from './BookingConfirmModal';
import { getDateFromDateObj, getNextSevenDatesFromToday } from '../utils/DateHelper';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Box
            hidden={value !== index}
            id={index}
            {...other}
            sx={{ py: 3, px: 4, width: '100%', boxSizing: 'border-box' }}
        >
            {value === index && (
                children
            )}
        </Box>
    );
}

const BookingTabs = ({ hospital }) => {
    const slotTimings = {
        morning: ['11:00 AM'],
        afternoon: ['12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'],
        evening: ['4:00 PM', '5:00 PM', '6:00 PM'],
    }

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const totalSlots = Object.keys(slotTimings).reduce((acc, slot) => (slotTimings[slot].length + acc), 0)

    const [sevenDatesFromToday, setSevenDatesFromToday] = useState([]);

    const [value, setValue] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [bookings, setBookings] = useState([]);

    const [bookingDateJSON, setBookingDateJSON] = useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const persistsHospitalBookingData = (bookingDateJSON) => {
        const newBookings = [...bookings];

        newBookings.push(`${hospital["Provider ID"]}${bookingDateJSON}`);

        setBookings(newBookings);
        localStorage.setItem('bookings', JSON.stringify(newBookings));
    }

    const handleConfirmBooking = () => {
        persistsHospitalBookingData(bookingDateJSON);

        setIsModalOpen(false);
    }

    const handleTimeClick = (id) => {
        setBookingDateJSON(id.substring(hospital["Provider ID"].length))

        setIsModalOpen(true)
    }

    const getSlotsAvailableCount = (date) => {
        const newDate = new Date(date);

        const slotsOccupied = bookings.reduce((acc, booking) => {
            const dateStart = hospital['Provider ID'].length;
            const timeStart = booking.indexOf('T', dateStart);

            const bookingDate = new Date(booking.slice(dateStart, timeStart));

            if (getDateFromDateObj(bookingDate) === getDateFromDateObj(newDate)) {
                return acc + 1
            }
            return acc;
        }, 0)


        return totalSlots - slotsOccupied;
    }

    const createTimeId = (date, time) => {
        const dateTimeStr = `"${date} ${time}"`;

        const newDate = new Date(dateTimeStr);

        const jsonDate = JSON.stringify(newDate);

        return `${hospital["Provider ID"]}${jsonDate.substring(1, jsonDate.length - 1)}`;
    }

    useEffect(() => {
        if (sevenDatesFromToday.length === 0) {
            const nextSevenDates = getNextSevenDatesFromToday();

            setSevenDatesFromToday(nextSevenDates);

            const persistedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');

            setBookings(persistedBookings);
        }
    }, []);

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                    mt: 2,
                    width: '100%',
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                    '& .css-1aky820-MuiButtonBase-root-MuiTab-root': {
                        flex: '0 0 33.3333%'
                    }
                }}
                ScrollButtonComponent={(props) => {
                    if (
                        props.direction === "left"
                    ) {
                        return (
                            <IconButton {...props} sx={{ border: '1px solid #E0E0E4', width: 50, height: 50 }}>
                                <FaAngleLeft color={"#2AA7FF"} />
                            </IconButton>
                        );
                    } else if (
                        props.direction === "right"
                    ) {
                        return (
                            <IconButton {...props} sx={{ border: '1px solid #E0E0E4', width: 50, height: 50 }}>
                                <FaAngleRight color='#2AA7FF' />
                            </IconButton>
                        );
                    } else {
                        return null;
                    }
                }}
            >
                {sevenDatesFromToday.map((date, idx) => {
                    let tabLabel = '';
                    if (idx === 0) {
                        tabLabel = 'Today';
                    } else if (idx === 1) {
                        tabLabel = 'Tomorrow';
                    } else {
                        date = new Date(date);
                        const dateOptions = {
                            month: 'short',
                            day: 'numeric',
                        };
                        tabLabel = `${weekdays[date.getDay()]}, ${date.toLocaleDateString('en-IN', dateOptions)}`;
                    }

                    return (
                        <Tab key={idx}
                            label={
                                <>
                                    <Typography fontWeight={700} color='#414146'>{tabLabel}</Typography>
                                    <Typography color="#01A400" fontSize={12} mt={0.5}>{getSlotsAvailableCount(date)} slots available</Typography>
                                </>
                            }
                            value={idx}
                            style={{ textTransform: 'capitalize' }}
                        />
                    )
                })}
            </Tabs>


            {sevenDatesFromToday.map((date, dateIdx) => (
                <TabPanel key={dateIdx} value={value} index={dateIdx}>
                    {Object.keys(slotTimings).map((slot, slotIdx) => {
                        return (
                            <Box key={slotIdx}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        my: 2,
                                        alignItems: 'center',
                                    }}>
                                    <Typography color="#414146" sx={{ textTransform: 'capitalize', width: '7rem' }}>
                                        {slot}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, width: '100%' }}>
                                        {slotTimings[slot].map((time, timeIdx) => {
                                            const id = createTimeId(date, time);
                                            return (
                                                <Button
                                                    id={id}
                                                    key={timeIdx}
                                                    variant='outlined'
                                                    color='primary'
                                                    borderColor='primary'
                                                    sx={{
                                                        border: '2px solid',
                                                        borderRadius: 1,
                                                    }}
                                                    onClick={() => handleTimeClick(id)}
                                                    disabled={bookings.includes(id)}
                                                >
                                                    {time}
                                                </Button>
                                            )
                                        })}
                                    </Box>
                                </Box>
                                {(slotIdx !== 2) && <Divider />}
                            </Box>
                        )
                    })}
                </TabPanel>
            ))}

            {bookingDateJSON &&
                <BookingConfirmModal
                    isOpen={isModalOpen}
                    handleClose={() => { setIsModalOpen(false) }}
                    bookingDateJSON={bookingDateJSON}
                    handleConfirmBooking={handleConfirmBooking}
                />
            }
        </>
    )
}

export default BookingTabs