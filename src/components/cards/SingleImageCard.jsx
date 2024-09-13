import { Card, CardMedia } from "@mui/material"

const ImageCard = ({ image, alt, imageSx, ...props }) => {
    return (
        <Card
            {...props}
            
        >
            <CardMedia
                component="img"
                image={image}
                alt={alt | ''}
                sx={imageSx}
            />
        </Card>
    )
}

export default ImageCard