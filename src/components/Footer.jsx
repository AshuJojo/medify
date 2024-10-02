import { alpha, Box, Container, Divider, List, ListItem, ListItemIcon, Stack, Typography, useTheme } from "@mui/material"
import Grid from '@mui/material/Grid2'
import Logo from "./Logo"
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
    const items1 = [
        'About Us',
        'Our Pricing',
        'Our Gallery',
        'Appointment',
        'Privacy Policy',
    ];

    const items2 = [
        'Orthology',
        'Neurology',
        'Dental Care',
        'Opthalmology',
        'Cardiology',
    ]

    const theme = useTheme();

    return (
        <Box sx={{
            bgcolor: 'primary.dark',
            py: 4,
        }}>
            <Container>
                <Grid container spacing={{ xs: 4, md: 6 }}>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Stack
                            direction={'column'}
                            spacing={2}
                            sx={{
                                justifyContent: 'space-between',
                                height: '100%',
                                alignItems: { xs: 'center', md: 'start' },
                            }}
                        >
                            <Logo />
                            <Box sx={{
                                display: 'flex',
                                gap: 2,
                                pb: { xs: 0, md: 2 },
                                '& >svg': {
                                    color: theme.palette.primary.main,
                                    borderRadius: 50,
                                    background: 'white',
                                    padding: 0.5,
                                    fontSize: 28
                                }
                            }}>
                                <FaFacebookF />
                                <FaTwitter />
                                <FaYoutube />
                                <FaPinterest />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
                        <List>
                            {items1.map((item, idx) => (
                                <ListItem key={idx} sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <MdOutlineKeyboardArrowRight color="white" />
                                    </ListItemIcon>
                                    <Typography variant="subtitle2" color='white' fontWeight={400}>{item}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
                        <List>
                            {items2.map((item, idx) => (
                                <ListItem key={idx} sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <MdOutlineKeyboardArrowRight color="white" />
                                    </ListItemIcon>
                                    <Typography variant="subtitle2" color='white' fontWeight={400}>{item}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
                        <List>
                            {items1.map((item, idx) => (
                                <ListItem key={idx} sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <MdOutlineKeyboardArrowRight color="white" />
                                    </ListItemIcon>
                                    <Typography variant="subtitle2" color='white' fontWeight={400}>{item}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
                <Divider sx={{ bgcolor: alpha('#ffffff', 0.2), mt: 4 }} />
                <Box sx={{
                    pt: 2
                }}>
                    <Typography variant="subtitle2" fontWeight={400} color="white" >Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
                </Box>
            </Container>

        </Box >
    )
}

export default Footer