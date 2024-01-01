import { PropsWithChildren } from "react";
import uiIcons from "../../assets/ui-icons";

import "./header.scss";
import DoremixIcons from "../../assets/doremix-icons";

type TProps = {
    openNavBar: () => void;    
}

export default function({ openNavBar }: TProps)
{
    return(
        <header className="header__container">
            <uiIcons.MainMenuBurguerIcon 
            height={24} width={27}
            onClick={openNavBar}
            />
            <DoremixIcons.DoremixLogo width={71} height={29} />
            <uiIcons.SearchIcon width={23} height={23} />
        </header>
    );
}