import AuthorTitle from "../../../../../utils/components/author-title";
import MusicTitle from "../../../../../utils/components/music-title";
import url from "/images/i-aint-worried.jpg";
import "./best-musics-list-item.scss"
import UiIcons from "../../../../../assets/ui-icons";

export default function ListItem ({ podiumNumber }: PodiumNumberProps)
{
    return (
        <div className="best_musics__list__item">
            <div className="best_musics__list__item__number">
                <p className="front_number">
                    { podiumNumber }
                </p>
                <p className="shadow_number">
                    { podiumNumber }
                </p>
            </div>
            <img className="best_musics__list__item__img"
            src={url} alt="" />
            <div className="best_musics__list__item__infos">
                <MusicTitle  color="blue" text="I Ain´t Worried" />
                <AuthorTitle color="black" text="OneRepublic" />
            </div>
            <button>
                <UiIcons.PlayPolygon className="custom_svg"/>
            </button>
        </div>
    );
}