import UiIcons from "../../assets/ui-icons";
import TitleH1 from "../../utils/components/title-h1/TitleH1";
import DiscoverMusicSlider from "./components/discover-music-slider";
import MusicGenres from "./components/music-genres-slider";
import "./discover.scss";

function appProcess()
{

}

export default function Discover()
{
    return (
        <div className="discover">
            <TitleH1 color="black" text="Descobrir" />
            <div className="discover__filters">
                <MusicGenres />                
                <UiIcons.ListView className="discover__svg" width={32} height={32} />
            </div>
            
                <DiscoverMusicSlider />
           
        </div>
    )
}