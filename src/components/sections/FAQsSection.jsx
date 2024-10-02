import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { FaPlus } from "react-icons/fa";
import banner from '../../assets/images/faqs-banner.jpg';

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
        <Box sx={{ bgcolor: "white", py: 2 }}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h6">Get Your Answer</Typography>
                <Typography variant="h2">Frequently Asked Questions</Typography>
                <Grid container spacing={2} sx={{ pt: { xs: 0, md: 4 }, justifyContent: 'center', alignItems: 'start' }}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box component='img' src={banner} alt="faqs banner" width={1} />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }} textAlign={'start'}>
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
                                    <Typography variant="h5" color="primary.dark" fontWeight={600}>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    pt: 0
                                }}>
                                    <Typography variant="subtitle2" color="#77829D">{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default FAQsSection