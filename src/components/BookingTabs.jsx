import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import BookingConfirmModal from './BookingConfirmModal';

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

const BookingTabs = () => {
    const slots = {
        morning: ['11:00 AM'],
        afternoon: ['12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'],
        evening: ['4:00 PM', '5:00 PM', '6:00 PM'],
    }

    const [value, setValue] = useState(0);
    const [sevenDatesFromToday, setSevenDatesFromToday] = useState([]);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getNextSevenDatesFromToday = () => {
        const dates = [];
        const todayDate = new Date();
        const dateOptions = {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        };

        dates.push(todayDate.toLocaleDateString('en-IN', dateOptions));

        for (let i = 0; i < 7; i++) {
            const nextDate = new Date(dates[i]);
            nextDate.setDate(nextDate.getDate() + 1);
            dates.push(nextDate.toLocaleDateString('en-IN', dateOptions));
        }

        return dates;
    }

    const handleTimeClick = (dateIdx, slot, timeIdx) => {
        if (dateIdx === undefined || slot === undefined || timeIdx === undefined)
            return;

        // const dateTimeStr = `${sevenDatesFromToday[dateIdx]} ${slots[slot][timeIdx]}`;
        // const date = new Date(dateTimeStr);

        // Tobe Implemented
        // const dateStr = JSON.stringify(date);
        // const retrieveDate = new Date(JSON.parse(dateStr));

        // console.log('retrieveDate', retrieveDate)

        const date = sevenDatesFromToday[dateIdx];
        setBookingDate(date);

        const time = slots[slot][timeIdx];
        setBookingTime(time);

        setIsModalOpen(true)
    }

    useEffect(() => {
        if (sevenDatesFromToday.length === 0) {
            setSevenDatesFromToday(getNextSevenDatesFromToday());
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
                    console.log('props', props)
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
                                    <Typography color="#01A400" fontSize={12} mt={0.5}>{11} slots available</Typography>
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
                    {Object.keys(slots).map((slot, slotIdx) => {
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
                                        {slots[slot].map((time, timeIdx) => {
                                            return (
                                                <Typography
                                                    key={slotIdx}
                                                    color='primary'
                                                    borderColor='primary'
                                                    sx={{
                                                        border: '2px solid',
                                                        py: 0.4,
                                                        width: '5rem',
                                                        borderRadius: 1,
                                                        textAlign: 'center',
                                                        '&:hover': {
                                                            bgcolor: '#2AA7FF',
                                                            color: 'white'
                                                        }
                                                    }}
                                                    onClick={() => handleTimeClick(dateIdx, slot, timeIdx)}
                                                >
                                                    {time}
                                                </Typography>
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

            {bookingDate &&
                <BookingConfirmModal
                    isOpen={isModalOpen}
                    handleClose={() => { setIsModalOpen(false) }}
                    bookingDate={bookingDate}
                    bookingTime={bookingTime}
                />
            }
        </>
    )
}

export default BookingTabs