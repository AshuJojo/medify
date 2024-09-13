import { Avatar, Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"


const BlogCard = ({ image, alt, title, category, datePosted, avatar, author }) => {
    return (
        <Card elevation={1} sx={{
            maxWidth: 345,
            display: 'block',
        }}>
            <CardMedia
                sx={{ height: 250 }}
                image={image}
                alt={alt | ''}
            />
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    color: '#77829D',
                    fontWeight: 500,
                    gap: 0.8
                }}>
                    <Typography gutterBottom>{category}</Typography>
                    <Divider sx={{ border: '1px solid #DDDDDD', mb: 1.3, mt: 0.5 }} />
                    <Typography gutterBottom>{datePosted}</Typography>
                </Box>
                <Typography gutterBottom component="div" sx={{
                    color: "primary.dark",
                    fontWeight: 500,
                    fontSize: '1.125rem'
                }}>
                    {title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar alt={author} src={avatar} sx={{ width: 32, height: 32, bgcolor: '#f2f2f2' }} />
                    <Typography sx={{ fontWeight: 500, color: 'primary.dark' }}>{author}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default BlogCard