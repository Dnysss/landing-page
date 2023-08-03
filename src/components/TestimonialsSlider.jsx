
//import testimonials Data
import { testimonialsData } from '../data';

//import swiper
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

const TestimonialsSlider = () => {
    
    return (
        <Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={20} pagination={{clickable: true,}} modules={[Pagination]} className='mySwiper'>
            {testimonialsData.map((slide, index) => {
                const { image, name, web, message, delay } = slide;
                return (
                    <SwiperSlide key={index} className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'>
                        <div className='w-20'>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <div className='text-lg text-primary font-bold'>
                                {name}
                            </div>
                            <div className='mb-4 font-semibold text-accent-primary'>
                                {web}
                            </div>
                            <div className='max-w-[240px]'>
                                {message}
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default TestimonialsSlider;