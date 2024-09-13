import { Box, Container } from "@mui/material"
import CustomCarousel from "../CustomCarousel";

import OfferCard from "../OfferCard"
import offer1 from '../../assets/images/offer1.png';
import offer2 from '../../assets/images/offer2.png';

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
                <CustomCarousel>

                    {offers.map((offer, idx) => {
                        return (
                            <OfferCard key={idx}
                                image={offer.image}
                                alt={offer.alt}
                            />
                        )
                    })}

                </CustomCarousel>
            </Box>
        </Container >
    )
}

export default OffersSection