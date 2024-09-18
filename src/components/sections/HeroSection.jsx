import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import HeroImage from '../../assets/images/hero-image.png';


const HeroSection = () => {
    const theme = useTheme();
    return (
        <Container sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
        }}>
            <Box sx={{
                width: '50%',
                alignSelf: 'center',
                // mt: 20,
                // mb: 5
            }}>
                <Typography
                    // variant="h4"
                    sx={{
                        fontSize: '1.938rem',
                        fontWeight: 500
                    }}
                >
                    Skip the travel! Find Online
                </Typography>
                <Typography
                    // variant="h3"
                    sx={{
                        fontSize: '3.5rem',
                        fontWeight: 700,
                    }}
                >
                    Medical <span style={{ color: theme.palette.primary.main }}>Centers</span>
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
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                width: '50%',
                pt: 2
            }}>
                <img src={HeroImage}
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        // position: 'absolute',
                        // top: 0,
                        // bottom: 0,
                        // zIndex: -1
                    }}
                    alt='Hero Image' />
            </Box>
        </Container>
    )
}

export default HeroSection