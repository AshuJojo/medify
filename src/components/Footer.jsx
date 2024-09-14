import { Box, Container, Divider, List, ListItem, ListItemIcon, Typography, useTheme } from "@mui/material"
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
            <Container sx={{
                flexDirection: 'column',
                alignItems: 'start'
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 8,
                    pb: 3,
                    justifyContent: 'space-between'
                }}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Logo />
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            pb: 2
                        }}>
                            <FaFacebookF
                                style={{
                                    background: 'white',
                                    border: '10px solid white',
                                    borderRadius: 50,
                                    color: theme.palette.primary.main
                                }}
                            />
                            <FaTwitter
                                style={{
                                    background: 'white',
                                    border: '10px solid white',
                                    borderRadius: 50,
                                    color: theme.palette.primary.main
                                }}
                            />
                            <FaYoutube
                                style={{
                                    background: 'white',
                                    border: '10px solid white',
                                    borderRadius: 50,
                                    color: theme.palette.primary.main
                                }}
                            />
                            <FaPinterest
                                style={{
                                    background: 'white',
                                    border: '10px solid white',
                                    borderRadius: 50,
                                    color: theme.palette.primary.main
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1
                        }}
                    >
                        <List
                            sx={{ width: '100%', maxWidth: 360 }}
                        >
                            {items1.map((item, idx) => (
                                <ListItem key={idx} sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <MdOutlineKeyboardArrowRight color="white" />
                                    </ListItemIcon>
                                    <Typography color='white' fontWeight={300}>{item}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1
                        }}
                    >
                        <List
                            sx={{ width: '100%', maxWidth: 360 }}
                        >
                            {items2.map((item, idx) => (
                                <ListItem key={idx} sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <MdOutlineKeyboardArrowRight color="white" />
                                    </ListItemIcon>
                                    <Typography color='white' fontWeight={300}>{item}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1
                        }}
                    >
                        <List
                            sx={{ width: '100%', maxWidth: 360 }}
                        >
                            {items1.map((item, idx) => (
                                <ListItem key={idx} sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <MdOutlineKeyboardArrowRight color="white" />
                                    </ListItemIcon>
                                    <Typography color='white' fontWeight={300}>{item}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                </Box>
                <Divider sx={{ flexGrow: 1, bgcolor: '#FFFFFF1A', width: '100%' }} />
                <Box sx={{
                    flexGrow: 1,
                    pt: 2
                }}>
                    <Typography color="white" >Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
                </Box>
            </Container >
        </Box >
    )
}

export default Footer