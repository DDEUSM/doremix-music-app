import { Swiper, SwiperSlide } from "swiper/react";
import Utils from "../../../../utils/components";
import "./discover-music-slider.scss";

function appProcess()
{
    const musics: {imgUri: string, title: string, author: string}[] 
    = [
        {
            imgUri: "./images/i-aint-worried.png",
            title: "I Ain't Worried",
            author: "OneRepublic"
        },
        {
            imgUri: "./images/i-aint-worried.png",
            title: "I Ain't Worried",
            author: "OneRepublic"
        },
        {
            imgUri: "./images/i-aint-worried.png",
            title: "I Ain't Worried",
            author: "OneRepublic"
        },
        {
            imgUri: "./images/i-aint-worried.png",
            title: "I Ain't Worried",
            author: "OneRepublic"
        }
    ];

    function populateMusics()
    {
        return musics.map(music => {
            return (
                <SwiperSlide className="discover__music__item">
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
            <div className="discover__slider">
                <Swiper 
                    slidesPerView={2}                        
                    className="mySwiper"                    
                >
                    { process.populateMusics() }
                </Swiper>
            </div>
           
        </>
    )
}