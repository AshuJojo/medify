import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import apple from "../../assets/images/apple-logo.png";
import arrow from "../../assets/images/down-arr.png";
import mobile from "../../assets/images/mobile.jpg";
import playstore from "../../assets/images/playstore.png";
import SmsForm from "../forms/SmsForm";

const DownloadAppSection = () => {
    return (
        <Container>
            <Grid container spacing={6} justifyContent='center' alignItems='center'>
                <Grid item size={{ xs: 6, md: 6 }} mt={2}>
                    <Box component='img' src={mobile} alt='mobile' width={1} height='auto' />
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }} sx={{ my: 'auto' }}>
                    <Box
                        position="relative"
                        pl={{ xs: "36px", md: "50px" }}
                        mb={{ xs: 4, md: 0 }}
                    >
                        <Typography variant="h2" mb={2}>
                            Download the
                            <br />
                            <Box component="span" color="primary.main">
                                Medify{" "}
                            </Box>
                            App
                        </Typography>

                        <Box
                            src={arrow}
                            component="img"
                            width={{ xs: 24, md: 40 }}
                            position="absolute"
                            left={0}
                            top={50}
                        />

                        <SmsForm />

                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={{ xs: 1, md: 2 }}
                        >
                            <Button
                                sx={{
                                    bgcolor: "#333",
                                    color: "#fff",
                                    py: 1.5,
                                    borderRadius: 1.5,
                                }}
                                size={"large"}
                                startIcon={<img src={playstore} height={24} />}
                                variant="contained"
                                disableElevation
                            >
                                Google Play
                            </Button>
                            <Button
                                sx={{
                                    bgcolor: "#333",
                                    color: "#fff",
                                    py: 1.5,
                                    borderRadius: 1.5,
                                }}
                                size="large"
                                startIcon={<img src={apple} height={24} />}
                                variant="contained"
                                disableElevation
                            >
                                App Store
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DownloadAppSection