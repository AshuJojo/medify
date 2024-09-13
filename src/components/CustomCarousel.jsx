// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const CustomCarousel = ({ children }) => {

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={70}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{
                paddingBottom: '2rem'
            }}
        >
            {children.map((elm, idx) => (<SwiperSlide key={idx}>{elm}</SwiperSlide>))}
        </Swiper>
    )
}

export default CustomCarousel;