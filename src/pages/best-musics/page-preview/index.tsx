import "./best-music-preview.scss";
import utils from "../../../utils/components";
import ListItem from "./components/best-musics-list-item";


function appProcess()
{
    function populateList(number: number)
    {
        const components: JSX.Element[] = [];
        for (let i=1; i <= number; i++)
        {
            components.push(<ListItem podiumNumber={i}/>);
        }
        return components;
    }
    return { populateList }
}

export default function BestMusicsPreview()
{
    const process = appProcess();
    return (
        <div className="best_musics">
            <div className="best_musics__title">
                <utils.TitleH1 
                    color="black"
                    text="As Melhores Músicas"
                />
                <p>
                    Ver Todos
                </p>  
            </div>
            <ul className="best_musics__list">
                { process.populateList(4) }
            </ul>
        </div>
    )
}