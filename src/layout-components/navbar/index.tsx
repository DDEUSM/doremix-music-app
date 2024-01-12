import "./navbar.scss"
import DoremixIcons from "../../assets/doremix-icons";
import UiIcons from "../../assets/ui-icons";
import { TNavBarProps } from "./types";

export default function({ navBarIsOpen }: TNavBarProps)
{
    return (                
        <nav className={`navbar_container ${navBarIsOpen?(
            `navbar__opened`):(``)}`}>
            <DoremixIcons.FullDoremixLogo 
            width={183} height={35} 
            className="navbar__svg"
            />
            <ul>
                <li>
                    <UiIcons.PlanetIcon 
                    width={30} height={30}/>
                    Descobrir
                </li>
                <li>
                    <UiIcons.HouseIcon 
                    width={30} height={30}/>
                    Ao Seu Redor
                </li>
                <li>
                    <UiIcons.StarIcon 
                    width={30} height={30}/>
                    Os Melhores artistas
                </li>
                <li>
                    <UiIcons.SharpIcon 
                    width={30} height={30}/>
                    As Melhores músicas
                </li>
            </ul>
        </nav>        
    )
}