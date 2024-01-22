import AuthorTitle from "../../../../../utils/components/author-title";
import MusicTitle from "../../../../../utils/components/music-title";
import url from "/images/i-aint-worried.jpg";
import "./best-musics-list-item.scss"

export default function ListItem ()
{
    return (
        <div className="best_musics__list__item">
            <div className="best_musics__list__item__number">

            </div>
            <img className="best_musics__list__item__img"
            src={url} alt="" />
            <div className="best_musics__list__item__infos">
                <MusicTitle  color="blue" text="I Ain´t Worried" />
                <AuthorTitle color="black" text="OneRepublic" />
            </div>
            <button></button>
        </div>
    );
}