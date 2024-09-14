import { Box, Button, Container, Divider, InputAdornment, TextField, Typography, useTheme } from "@mui/material"
import { FaApple, FaGooglePlay } from "react-icons/fa";
import ArrowIcon from '../../assets/svg/arrow.svg';
import phone from '../../assets/images/phone.png';
import phoneFrame from '../../assets/images/phone-frame.png';

const Phone = () => {
    return (
        <Box sx={{ position: 'relative', height: '5rem' }}>
            <img src={phone} style={{
                position: 'absolute',
                borderRadius: '5rem',
                left: 5,
                top: 10
            }} />
            <img src={phoneFrame} style={{
                position: 'absolute',
                borderRadius: '2rem',
            }} />
        </Box>
    )
}

const DownloadAppSection = () => {
    const theme = useTheme();
    return (
        <Container sx={{paddingBottom: '15rem', position: 'relative', zIndex: -1}}>
            <Box width='40%' sx={{ position: 'relative'}}>
                <Box sx={{
                    position: 'absolute',
                    top: 30
                }}>
                    <Phone />
                </Box>
                <Box sx={{
                    position: 'absolute',
                    top: -30,
                    left: 150,
                    zIndex: -1
                }}>
                    <Phone />
                </Box>
            </Box>
            <Box width='60%' sx={{ py: 20, position: 'relative' }}>
                <Box sx={{
                    width: '10%',
                    position: 'absolute',
                    bottom: -15
                }}>
                    <img src={ArrowIcon} alt="Arrow Icon" />
                </Box>
                <Box sx={{
                    width: '90%',
                    position: "absolute",
                    right: 0
                }}>
                    <Typography variant="h3" color='primary.dark' fontWeight={600}>Download the</Typography>
                    <Typography variant="h3" color='primary.dark' fontWeight={600} mb={3}><span style={{ color: theme.palette.primary.main }} >Medify</span> App</Typography>
                    <Typography fontWeight={700}>Get the link to download the app</Typography>
                    <Box sx={{ display: "flex", py: 2 }}>
                        <TextField
                            placeholder="Enter phone number"
                            type="number"
                            size='medium'
                            sx={{ m: 1, flexGrow: 1, bgcolor: 'white', pl: 0, ml: 0, my: 0 }}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start" sx={{ maxHeight: '100%', height: '100%' }}>+91
                                        <Divider orientation="vertical" flexItem sx={{ pl: 2, mr: 1 }} />
                                    </InputAdornment>,
                                },
                            }}
                        />
                        <Button>Send Sms</Button>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 4, width: '70%', mt: 5 }}>
                        <Button startIcon={<FaGooglePlay />} sx={{ flexGrow: 1, p: 2, bgcolor: 'black', fontWeight: 500, fontSize: 20, height: 70 }}>
                            Google Play
                        </Button>
                        <Button startIcon={<FaApple />} sx={{ flexGrow: 1, p: 2, bgcolor: 'black', fontWeight: 500, fontSize: 20, height: 70 }}>
                            Apple Store
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default DownloadAppSection