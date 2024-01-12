import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./music-genres-slider.scss";

import { Pagination } from "swiper/modules";

export default function MusicGenres()
{
    return (
        <div className="genres_slider">
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
            </Swiper>
        </div>
    )
}