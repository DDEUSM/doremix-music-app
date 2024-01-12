import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./music-genres-slider.scss";

export default function MusicGenres()
{
    return (
        <div className="">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
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