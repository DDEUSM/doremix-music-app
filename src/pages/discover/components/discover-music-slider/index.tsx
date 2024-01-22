import { Swiper, SwiperSlide } from "swiper/react";
import Utils from "../../../../utils/components";
import "./discover-music-slider.scss";

import "swiper/css";
import 'swiper/css/grid';
import "swiper/css/pagination";

import { Grid, Pagination } from 'swiper/modules';
import { musics } from "../../../../data";

function appProcess()
{
    function populateMusics ()
    {
        return musics.map(music => {
            return (
                <SwiperSlide className="discover__music__item">
                   <div className="discover__music__item__area">
                    <img className="discover__music__item__img" src={ music.imgUri } alt="" />
                        <div className="discover__music__item__infos">
                            <Utils.MusicTitle 
                                color="white"
                                text={ music.title }
                            />
                            <Utils.AuthorTitle 
                                color="white"
                                text={ music.author }
                            />                        
                        </div>
                   </div>
                </SwiperSlide>
            )
        })
    }
    return { populateMusics }
}


export default function DiscoverMusicSlider()
{
    const process = appProcess();
    return (
        <>            
            <div className="discover__music__slider">
                <Swiper 
                    slidesPerView={2}
                    grid={{rows: 2}}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid,Pagination]}                       
                    className="mySwiper"                    
                >
                    { process.populateMusics() }
                </Swiper>
            </div>           
        </>
    )
}