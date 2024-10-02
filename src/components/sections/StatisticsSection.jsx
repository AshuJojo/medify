import { Box, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import { FaHandHoldingHeart, FaRegHospital } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { RiHospitalLine } from "react-icons/ri"
import StatisticsCard from "../cards/StatisticsCard"

const StatisticsSection = () => {
    return (
        <Container>
            <Grid container spacing={6} py={4}>
                <Grid item size={{ xs: 12, md: 6 }} my='auto'>
                    <Typography variant="h6">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
                    <Typography variant="h2" my={1}>
                        Our Families
                    </Typography>

                    <Typography variant="subtitle2" sx={{ color: '#77829D', mt: 2, lineHeight: '2.55rem' }}>
                        We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                    </Typography>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Box sx={{ width: '100%', mx: 'auto', my: 4 }}>
                        <Grid container spacing={4} justifyContent={'center'}>
                            <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                                <StatisticsCard
                                    icon={<FaHandHoldingHeart />}
                                    iconBg='#EBF7FF'
                                    iconColor="#2AA7FF"
                                    statsNum={5000}
                                    statsName='Happy Patients'
                                    sx={{
                                        height: 300,
                                        maxWidth: 250,
                                        borderRadius: 2,
                                        mb: 2,
                                        py: 4,
                                        boxShadow: '0px 15px 45px -5px #00000012',
                                        mx: 'auto'
                                    }}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{ mt: { md: 4 } }}>
                                <StatisticsCard
                                    icon={<FaRegHospital />}
                                    iconBg='#FFF2F0'
                                    iconColor="#FF684C"
                                    statsNum={200}
                                    statsName='Hospitals'
                                    sx={{
                                        height: 300,
                                        maxWidth: 250,
                                        borderRadius: 2,
                                        mb: 2,
                                        py: 4,
                                        boxShadow: '0px 15px 45px -5px #00000012',
                                        mx: 'auto'
                                    }}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{ mt: { md: -8 } }}>

                                <StatisticsCard
                                    icon={<RiHospitalLine />}
                                    iconBg="#FFF7E6"
                                    iconColor='#FFB200'
                                    statsNum={1000}
                                    statsName='Laboratories'
                                    sx={{
                                        height: 300,
                                        maxWidth: 250,
                                        borderRadius: 2,
                                        mb: 2,
                                        py: 4,
                                        boxShadow: '0px 15px 45px -5px #00000012',
                                        mx: 'auto'
                                    }}
                                />

                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{mt: {md: -4}}}>
                                <StatisticsCard
                                    icon={<FaUserDoctor />}
                                    iconBg='#EBFAF1'
                                    iconColor="#4CD080"
                                    statsNum={700}
                                    statsName='Expert Doctors'
                                    sx={{
                                        height: 300,
                                        maxWidth: 250,
                                        borderRadius: 2,
                                        mb: 2,
                                        py: 4,
                                        boxShadow: '0px 15px 45px -5px #00000012',
                                        mx: 'auto'
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    )
}

export default StatisticsSection