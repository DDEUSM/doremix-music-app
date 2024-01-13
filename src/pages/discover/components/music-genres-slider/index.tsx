import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./music-genres-slider.scss";
import { Pagination } from "swiper/modules";


function appProcess()
{
    const musicalGenres = ["Pop", "Rock", "Metal", "Funk", "Classic", "Bossa Nova", "Eletronic"];

    function populateGenres()
    {
        return musicalGenres.map(( gender: string ) => 
        {
            return (
                <SwiperSlide>
                    { gender }
                </SwiperSlide>
            )
        })
    }

    return { populateGenres }
}


export default function MusicGenres()
{
    const process = appProcess();

    return (
        <div className="genres_slider">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                modules={[Pagination]}
                className="mySwiper"
            >
                { process.populateGenres() }
            </Swiper>
        </div>
    );
}