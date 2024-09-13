import { Box, Container, List, ListItem, ListItemIcon, Paper, Typography, useTheme } from "@mui/material"
import { MdVerified } from "react-icons/md"
import ImageCard from "../cards/ImageCard";
import care1 from '../../assets/images/care/care1.png'
import care2 from '../../assets/images/care/care2.png'
import { FaPhoneSquareAlt } from "react-icons/fa";

const CareSection = () => {
    const theme = useTheme();
    return (
        <Container sx={{ py: 4, my: 4 }}>
            <Box
                sx={{
                    width: '50%',
                    mr: 6,
                    height: '0',
                    position: 'relative'
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        position: 'absolute',
                        transform: 'translate( 10%, -150%)',
                        zIndex: 2,
                        borderRadius: 2,
                        boxShadow: '0px 40px 40px -15px #94B6CE26',
                    }}>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'start', alignItems: 'center', pb: 0.5 }}>
                        <FaPhoneSquareAlt fontSize='2rem' color={theme.palette.primary.main} />
                        <Typography color='primary.dark' fontWeight={700} fontSize={16} width='fit-content'>Free Consultation</Typography>
                    </Box>
                    <Typography color='#77829D' fontWeight={500} fontSize={15} px={1}>Consultation with the best</Typography>
                </Paper>
                <ImageCard
                    image={care1}
                    alt='Care Doctor'
                    sx={{
                        width: '17rem',
                        border: '4px solid white',
                        position: 'absolute',
                        transform: 'translate(90%, -90%)'
                    }}
                />
                <ImageCard
                    image={care2}
                    alt='Care Doctor 2'
                    sx={{
                        width: '17rem',
                        border: '4px solid white',
                        position: 'absolute',
                        transform: 'translate( 40%, -10%)'
                    }}
                />
            </Box>
            <Box width='50%'>
                <Typography variant="subtitle1" color='primary' fontWeight={600}>HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '3.5em',
                        fontWeight: 700,
                    }}
                >
                    Patient <span style={{ color: theme.palette.primary.main }}>Caring</span>
                </Typography>

                <Typography
                    sx={{
                        py: 1,
                        color: '#5C6169',
                        fontSize: '1rem',
                        mt: '2rem'
                    }}
                >
                    Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                </Typography>

                <List
                    sx={{ width: '100%', maxWidth: 360 }}
                >
                    <ListItem sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                            <MdVerified color={theme.palette.primary.main} />
                        </ListItemIcon>
                        <Typography color='primary.dark' fontWeight={500} fontSize={18}>Stay Updated About Your Health</Typography>
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                            <MdVerified color={theme.palette.primary.main} />
                        </ListItemIcon>
                        <Typography color='primary.dark' fontWeight={500} fontSize={18}>Check Your Results Online</Typography>
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                            <MdVerified color={theme.palette.primary.main} />
                        </ListItemIcon>
                        <Typography color='primary.dark' fontWeight={500} fontSize={18}>Manage Your Appointments</Typography>
                    </ListItem>
                </List>
            </Box>
        </Container >
    )
}

export default CareSection