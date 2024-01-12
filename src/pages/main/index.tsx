import BestArtistsPreview from "../best-artists/page-preview";
import BestMusicsPreview from "../best-musics/page-preview";
import Discover from "../discover";

export default function Main()
{
    return (
        <>
          <Discover />    
          <BestMusicsPreview />
          <BestArtistsPreview />      
        </>
    )
}