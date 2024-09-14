import { Box, Container } from "@mui/material"
import CustomCarousel from "../CustomCarousel";

import offer1 from '../../assets/images/offers/offer1.png';
import offer2 from '../../assets/images/offers/offer2.png';
import ImageCard from "../cards/ImageCard";

const OffersSection = () => {
    const offers = [
        {
            image: offer1,
            alt: 'Offer 1'
        },
        {
            image: offer2,
            alt: 'Offer 2'
        },
        {
            image: offer1,
            alt: 'Offer 1'
        },
        {
            image: offer2,
            alt: 'Offer 2'
        },
        {
            image: offer1,
            alt: 'Offer 1'
        },
        {
            image: offer2,
            alt: 'Offer 2'
        },
        {
            image: offer1,
            alt: 'Offer 1'
        },
        {
            image: offer2,
            alt: 'Offer 2'
        },
        {
            image: offer1,
            alt: 'Offer 1'
        },
    ]
    return (
        <Container sx={{ padding: '1rem' }}>
            <Box width='100%'>
                <CustomCarousel slidesPerView={3} spaceBetween={70}>

                    {offers.map((offer, idx) => (
                        <ImageCard
                            key={idx}
                            image={offer.image}
                            alt={offer.alt}
                            sx={{
                                borderRadius: 6,
                                padding: 0,
                                margin: 0,
                            }}
                        />
                    ))}

                </CustomCarousel>
            </Box>
        </Container >
    )
}

export default OffersSection