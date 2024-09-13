import { Box, Container, Typography } from "@mui/material"
import BlogCard from "../cards/BlogCard";
import DetoxImage from '../../assets/images/detox.png';
import doc1 from '../../assets/images/docs/doc2.png';

const BlogSection = () => {
    return (
        <Container sx={{ flexDirection: 'column' }}>
            <Typography variant="h5" color="primary" fontWeight={600}>Blog & News</Typography>
            <Typography variant="h3" color="primary.dark" fontWeight={600}>Read Our Latest News</Typography>

            <Box sx={{
                display: 'flex',
                gap: 8,
                mt: 5
            }}>
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
            </Box>
        </Container>
    )
}

export default BlogSection