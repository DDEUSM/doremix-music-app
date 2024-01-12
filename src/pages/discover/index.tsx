import TitleH1 from "../../utils/components/title-h1/TitleH1";
import MusicGenres from "./components/music-genres-slider";
import "./discover.scss";

function appProcess()
{

}

export default function Discover()
{
    return (
        <div className="discover">
            <TitleH1 color="blue" text="Descobrir" />
            <div className="discover__filters">
                <MusicGenres />                

            </div>
            <div className="discover__musics">

            </div>
            <div className="discover__slider">
                
            </div>
        </div>
    )
}