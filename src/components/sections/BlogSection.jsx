import { Box, Container, Stack, Typography } from "@mui/material";
import DetoxImage from '../../assets/images/detox.png';
import doc1 from '../../assets/images/docs/doc2.png';
import BlogCard from "../cards/BlogCard";

const BlogSection = () => {
    return (
        <Box sx={{ bgcolor: "white", py: '3rem', }}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h6">Blog & News</Typography>
                <Typography variant="h2">Read Our Latest News</Typography>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mt={4} alignItems="center">
                    <BlogCard
                        image={DetoxImage}
                        alt="detox"
                        title="6 Tips To Protect Your Mental Health When You’re Sick"
                        category='Medical'
                        datePosted='March 31, 2022'
                        avatar={doc1}
                        author="Rebecca Lee"
                    />
                    <BlogCard
                        image={DetoxImage}
                        alt="detox"
                        title="6 Tips To Protect Your Mental Health When You’re Sick"
                        category='Medical'
                        datePosted='March 31, 2022'
                        avatar={doc1}
                        author="Rebecca Lee"
                    />
                    <BlogCard
                        image={DetoxImage}
                        alt="detox"
                        title="6 Tips To Protect Your Mental Health When You’re Sick"
                        category='Medical'
                        datePosted='March 31, 2022'
                        avatar={doc1}
                        author="Rebecca Lee"
                    />
                </Stack>
            </Container>
        </Box >
    )
}

export default BlogSection