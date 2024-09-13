import { Card, CardMedia } from "@mui/material";

const OfferCard = ({ image, alt, ...props }) => {
    return (
        <Card {...props}
            sx={{
                borderRadius: 6,
                padding: 0,
                margin: 0,
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={alt}
            />
        </Card>
    )
}

export default OfferCard;