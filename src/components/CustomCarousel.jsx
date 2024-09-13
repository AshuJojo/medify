import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const CustomCarousel = ({ children, ...props }) => {
    
    return (
        <Swiper
            {...props}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{
                paddingBottom: '3rem',
            }}
        >
            {Array.isArray(children) && children.map((elm, idx) => (
                <SwiperSlide key={idx}
                    style={{
                        width: 'fit-content',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {elm}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CustomCarousel;