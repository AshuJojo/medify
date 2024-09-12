import { Box, Button, Container, styled, Typography } from "@mui/material";
import HeroImage from '../assets/images/hero-image.png';

const CustomSpan = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main
}))

const HeroSection = () => {
    return (
        <Container sx={{ justifyContent: 'space-between', alignItems: 'start'}}>
            <Box sx={{ width: '50%', alignSelf: 'center', mt: 20, mb: 5 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: '1.938em',
                        fontWeight: 500
                    }}
                >
                    Skip the travel! Find Online
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '3.5em',
                        fontWeight: 700,
                    }}
                >
                    Medical <CustomSpan>Centers</CustomSpan>
                </Typography>
                <Typography
                    sx={{
                        py: 1,
                        color: '#5C6169',
                        fontSize: '1.25em',
                        fontWeight: 400
                    }}
                >
                    Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                </Typography>

                <Button sx={{ px: 3, my: 2 }}>Find Centers</Button>
            </Box>
            <Box sx={{ width: '50%', position: 'relative' }}>
                <img src={HeroImage}
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        position: 'absolute',
                        top: 50,
                        zIndex: -1
                    }}
                    alt='Hero Image' />
            </Box>
        </Container>
    )
}

export default HeroSection