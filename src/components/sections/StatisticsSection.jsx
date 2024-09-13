import { Box, Container, Typography } from "@mui/material"
import StatisticsCard from "../cards/StatisticsCard"
import { FaHandHoldingHeart, FaRegHospital } from "react-icons/fa"
import { RiHospitalLine } from "react-icons/ri"
import { FaUserDoctor } from "react-icons/fa6"

const StatisticsSection = () => {
    return (
        <Container>
            <Box
                sx={{
                    width: '50%',
                    py: 30,
                    mr: 15
                }}
            >
                <Typography variant="subtitle1" color='primary' fontWeight={600}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '3.5em',
                        fontWeight: 700,
                    }}
                >
                    Our Families
                </Typography>

                <Typography
                    sx={{
                        py: 1,
                        color: '#5C6169',
                        fontSize: '1rem',
                        mt: '2rem'
                    }}
                >
                    We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                </Typography>
            </Box>
            <Box sx={{
                width: '50%',
                position: 'relative',
            }}>
                <StatisticsCard
                    icon={<FaHandHoldingHeart />}
                    iconBg='#EBF7FF'
                    iconColor="#2AA7FF"
                    statsNum={5000}
                    statsName='Happy Patients'
                    sx={{
                        width: 250,
                        borderRadius: 2,
                        mb: 2,
                        py: 4,
                        boxShadow: '0px 15px 45px -5px #00000012',
                        position: 'absolute',
                        transform: 'translate( 0%, -120%)'
                    }}
                />
                <StatisticsCard
                    icon={<FaRegHospital />}
                    iconBg='#FFF2F0'
                    iconColor="#FF684C"
                    statsNum={200}
                    statsName='Hospitals'
                    sx={{
                        width: 250,
                        borderRadius: 2,
                        mb: 2,
                        py: 4,
                        boxShadow: '0px 15px 45px -5px #00000012',
                        position: 'absolute',
                        transform: 'translate( 110%, -100%)'
                    }}
                />
                <StatisticsCard
                    icon={<RiHospitalLine />}
                    iconBg="#FFF7E6"
                    iconColor='#FFB200'
                    statsNum={1000}
                    statsName='Laboratories'
                    sx={{
                        width: 250,
                        borderRadius: 2,
                        mb: 2,
                        py: 4,
                        boxShadow: '0px 15px 45px -5px #00000012',
                        position: 'absolute',
                        transform: 'translate( 0%, -10%)'
                    }}
                />
                <StatisticsCard
                    icon={<FaUserDoctor />}
                    iconBg='#EBFAF1'
                    iconColor="#4CD080"
                    statsNum={700}
                    statsName='Expert Doctors'
                    sx={{
                        width: 250,
                        borderRadius: 2,
                        mb: 2,
                        py: 4,
                        boxShadow: '0px 15px 45px -5px #00000012',
                        position: 'absolute',
                        transform: 'translate( 110%, 10%)'
                    }}
                />
            </Box>
        </Container>
    )
}

export default StatisticsSection