import { Card, CardMedia } from "@mui/material"

const DoctorCard = ({ image, alt }) => {
    return (
        <Card
            elevation={1}
            sx={{
                width: "fit-content",
                height: '24rem',
                position: 'relative',
                border: '0.5rem solid white',
                borderRadius: '100% 100% 0 0',
                boxShadow: '0px 15px 55px -10px #00000017',
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={alt}
                sx={{
                    background: 'linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)',
                    pt: 2,
                    px: 4,
                }}
            />
        </Card>
    )
}

export default DoctorCard