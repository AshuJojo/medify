import { Avatar, Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"

const BlogCard = ({ image, alt, title, category, datePosted, avatar, author }) => {
    return (
        <Card elevation={1} sx={{
            display: 'block',
            textAlign: 'start'
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
                    <Typography variant="subtitle2" color={'#77829D'} gutterBottom>{category}</Typography>
                    <Divider sx={{ border: '1px solid #DDDDDD', mb: 1.3, mt: 0.5 }} />
                    <Typography variant="subtitle2" color={'#77829D'} >{datePosted}</Typography>
                </Box>
                <Typography variant="h5" sx={{
                    color: 'primary.dark',
                    fontWeight: 500,
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                }} gutterBottom >
                    {title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                    <Avatar alt={author} src={avatar} sx={{ width: 32, height: 32, bgcolor: '#f2f2f2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 500, color: 'primary.dark' }}>{author}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default BlogCard