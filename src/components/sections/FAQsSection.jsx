import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Paper, Typography, useTheme } from "@mui/material"
import { FaPlus } from "react-icons/fa"
import ImageCard from "../cards/ImageCard";
import friendlyDoc from '../../assets/images/friendly-doc.png';
import CareIcon from '../../assets/svg/care.svg';
import HappyIcon from '../../assets/svg/happy.svg';

const FAQsSection = () => {

    const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
    ]

    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: "white" }}>
            <Container sx={{ flexDirection: 'column', height: '40rem', justifyContent: 'start' }}>
                <Typography variant="h5" color="primary" fontWeight={600}>Get Your Answer</Typography>
                <Typography variant="h3" color="primary.dark" fontWeight={600}>Frequently Asked Questions</Typography>

                <Box width="100%" pt={8}>
                    <Box sx={{ width: '50%', position: 'relative' }}>
                        <ImageCard
                            image={friendlyDoc}
                            alt='Friendly Doc'
                            sx={{
                                width: '30rem',
                                border: '4px solid white',
                                position: 'absolute',
                                zIndex: 0,
                                top: 0,
                                left: 50,
                            }}
                        />

                        <ImageCard
                            image={CareIcon}
                            alt="Care Icon"
                            sx={{
                                width: '4rem',
                                height: '4rem',
                                p: '1rem',
                                borderRadius: '50rem',
                                position: 'absolute',
                                zIndex: 1,
                                right: 10,
                                top: 150
                            }}
                            imageSx={{
                                width: '2.5rem',
                                height: '2.5rem',
                            }}
                        />

                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                position: 'absolute',
                                zIndex: 2,
                                top: 300,
                                left: -30,
                                borderRadius: 2,
                                boxShadow: '0px 40px 40px -15px #94B6CE26',

                            }}>
                            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'start', alignItems: 'center', pb: 0.5 }}>
                                <img src={HappyIcon} alt="Happy Icon" />
                                <Box>
                                    <Typography color='primary.dark' fontWeight={700} fontSize={16} width='fit-content'>84k+</Typography>
                                    <Typography color='#77829D' fontWeight={500} fontSize={15} >Happy Patients</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                    <Box sx={{ width: '50%', float: 'right', pt: 2 }}>
                        {faqs.map((faq, idx) => (
                            <Accordion
                                key={idx}
                                elevation={0}
                                sx={{
                                    my: 6,

                                    '& .css-144hfb1-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded': {
                                        minHeight: 0,
                                    },
                                    '& .css-1ge78ea-MuiPaper-root-MuiAccordion-root::before': {
                                        height: 0
                                    },
                                    '&:before': {
                                        display: 'none'
                                    }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<FaPlus color={theme.palette.primary.main} />}
                                    sx={{
                                        '& .MuiAccordionSummary-contentGutters': {
                                            m: 0,
                                        },
                                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                            transform: 'rotate(45deg)',
                                        },

                                    }}
                                >
                                    <Typography variant="h6" color="primary.dark">{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    pt: 0
                                }}>
                                    <Typography variant="subtitle1">{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Container >
        </Box>
    )
}

export default FAQsSection