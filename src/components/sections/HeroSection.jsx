import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import HeroImage from '../../assets/images/hero-image.png';


const HeroSection = () => {
    const theme = useTheme();
    return (
        <Container>
            <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='start'>
                <Box sx={{ my: { xs: 4, sm: 4, md: 4 }, width: { xs: '100%', sm: '80%', md: '100%' }, mr: 'auto'}}>
                    <Typography
                        variant="h3"
                    >
                        Skip the travel! Find Online
                    </Typography>
                    <Typography
                        variant="h1"
                    >
                        Medical <span style={{ color: theme.palette.primary.main }}>Centers</span>
                    </Typography>
                    <Typography
                        variant='body1'
                    >
                        Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                    </Typography>

                    <Button variant="contained" sx={{ px: 3, my: 2 }} disableElevation>Find Centers</Button>
                </Box>
                <Box sx={{ pt: { xs: 0, md: 4 } }}>
                    <img src={HeroImage}
                        style={{ width: '100%' }}
                        alt='Hero Image' />
                </Box>
            </Stack>
        </Container >
    )
}

export default HeroSection