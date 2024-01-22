import BestArtistsPreview from "../best-artists/page-preview";
import BestMusicsPreview from "../best-musics/page-preview";
import Discover from "../discover";
import "./main.scss";

export default function Main()
{
    return (
        <main className="main_home">
          <Discover />    
          <BestMusicsPreview />
          <BestArtistsPreview />      
        </main>
    )
}