import { Box, Container, List, ListItem, ListItemIcon, Typography, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { MdVerified } from "react-icons/md";
import banner from '../../assets/images/patientcaring.png';

const CareSection = () => {
    const theme = useTheme();
    return (
        <Container>
            <Grid container spacing={6} alignItems='center' py={12}>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Box
                        component="img"
                        src={banner}
                        alt="Patient Caring"
                        width={1}
                    />
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Box>
                        <Typography variant="subtitle2" color='primary' fontWeight={600}>HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
                        <Typography variant="h2">
                            Patient <span style={{ color: theme.palette.primary.main }}>Caring</span>
                        </Typography>

                        <Typography variant="subtitle2"
                            sx={{
                                my: 2,
                                color: '#77829D',
                                fontSize: '1rem',
                            }}
                        >
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                        </Typography>

                        <List
                            sx={{ width: '100%', maxWidth: 360 }}
                        >
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <MdVerified color={theme.palette.primary.main} />
                                </ListItemIcon>
                                <Typography variant="h5" color='primary.dark' fontWeight={500}>Stay Updated About Your Health</Typography>
                            </ListItem>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <MdVerified color={theme.palette.primary.main} />
                                </ListItemIcon>
                                <Typography variant="h5" color='primary.dark' fontWeight={500}>Check Your Results Online</Typography>
                            </ListItem>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <MdVerified color={theme.palette.primary.main} />
                                </ListItemIcon>
                                <Typography variant="h5" color='primary.dark' fontWeight={500}>Manage Your Appointments</Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Grid >
            </Grid >
        </Container >
    )
}

export default CareSection