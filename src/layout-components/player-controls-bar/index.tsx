import uiIcons from "../../assets/ui-icons"
import "./player-controls.scss";
import "../../utils/styles-utils.scss";
import img_url from "/images/i-aint-worried.jpg";
import MusicTitle from "../../utils/components/music-title";
import AuthorTitle from "../../utils/components/author-title";


function processes()
{

}

export default function()
{
    return (
        <div className="player_controls">
            <div className="player_controls__music">
                <img className="player_controls__music__image" src={img_url} alt="" />
                <div className="player_controls__music__infos">     <MusicTitle 
                        text="I Ain't Worried"
                        color="blue"
                    />
                    <AuthorTitle 
                        text="OneRepublic"
                        color="black" 
                    />
                </div>
                <button className="default_button"> 
                    <uiIcons.Arrow className="rotate_270"/>
                </button>
            </div>
            <div className="player_controls__buttons">
                <button className="default_button">
                    <uiIcons.ShuffleMusicIcon width={28} height={28}/>
                </button>
                <button className="default_button">
                    <uiIcons.NextMusicIcon className="rotate_180" width={23} height={23}/>
                </button>
                <button className="default_button">
                    <uiIcons.PlayMusicIcon width={42} height={42}/>           
                </button>
                <button className="default_button">
                    <uiIcons.NextMusicIcon width={23} height={23}/>
                </button>
                <button className="default_button">
                    <uiIcons.LoopMusicIcon width={28} height={28}/>
                </button>            
            </div>
        </div>
    )
}