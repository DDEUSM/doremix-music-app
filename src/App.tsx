import { useState } from "react";
import layout from "./layout-components"

function appProcesses()
{
    const [ navBarIsOpen, setNavBarState ] = useState<boolean>(false);

    function toggleNavBar()
    {
        setNavBarState(!navBarIsOpen);
    }

    return {
        toggleNavBar,
        navBarIsOpen
    }
}

export default function App() 
{
    
    const process = appProcesses();
        
    return (
        <>
            <layout.Overlay navBarIsOpen={process.navBarIsOpen}
                openNavBar={process.toggleNavBar}
            />
            <layout.Header openNavBar={process.toggleNavBar}/>                                  
            <layout.Navbar navBarIsOpen={process.navBarIsOpen}/>                           
        </>
    )
}


