import { Button, Card, CardActions, CardContent, Box, Typography, Divider } from '@mui/material';

import { AiFillLike } from "react-icons/ai"
import hospitalImage from '../../assets/images/hospital-img.png';
import BookingTabs from '../BookingTabs';

const HospitalInfoCard = () => {
    return (
        <Card elevation={0} sx={{ borderRadius: 2, px: 2, flexDirection: 'column', width: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{
                    bgcolor: '#8CCFFF',
                    padding: 2.5,
                    borderRadius: 50,
                    ml: 2,
                    my: 4,
                    height: 'fit-content',
                    marginBottom: 'auto'
                }}>
                    <img src={hospitalImage} alt="Hospital" style={{ height: 50, width: 50 }} />
                </Box>
                <CardContent
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        mt: 4,
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h6" color='primary' fontWeight={600} pb={1}>
                            Fortis Hospital Richmond Road
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={700} >Banglore, Karnataka</Typography>
                        <Typography>Smilessence Center for Advanced Dentistry + 1 mofareaerav</Typography>
                        <Typography variant="body1" color="success" fontWeight={700}>
                            FREE
                            <Typography
                                display='inline'
                                color="#787887"
                                sx={{ textDecoration: "line-through", mx: 1 }}>
                                ₹500
                            </Typography>
                            <Typography color="#414146" display='inline'>
                                Consultation fee at clinic
                            </Typography>
                        </Typography>

                        <Box
                            sx={{
                                mt: 4,
                                px: 1.5,
                                pt: 0.5,
                                borderRadius: 2,
                                bgcolor: '#00A500',
                                width: 'fit-content',
                                mb: 2,
                            }}
                        >
                            <AiFillLike color="white" style={{ verticalAlign: 'inherit' }} />
                            <Typography display="inline" color="white" ml={0.5}>
                                5
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: 1,
                    marginTop: 'auto',
                    flexDirection: 'column',
                    gap: 2,
                    mb: 2,
                    mr: 2
                }}>
                    <Typography color="#01A400" fontWeight={500}>Available Today</Typography>
                    <Button sx={{ whiteSpace: 'nowrap' }}>Book FREE Center Visit</Button>
                </CardActions>
            </Box>

            <Divider sx={{border: '1px solid #F0F0F5', width: '100%'}}/>

            <BookingTabs />
        </Card>
    )
}

export default HospitalInfoCard