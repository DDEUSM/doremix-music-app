import TitleH1 from "../../../utils/components/title-h1/TitleH1";
import "./best-artists-page-preview.scss";

function appProcess()
{
    function populateArtists (number: number)
    {
        return <></>
    }
    return { populateArtists }
}

export default function BestArtistsPreview()
{
    const process = appProcess();

    return (       
        <div className="best_artists">
            <div className="best_artists__title">
                <TitleH1 
                    color="black"
                    text="Os Melhores Artistas"
                />
                <p>
                    Ver Todos
                </p>  
            </div>
            <ul className="best_artists__list">
                { process.populateArtists(4) }
            </ul>
        </div>        
    )
}