import { useState } from "react";
import layout from "./layout-components"
import Main from "./pages/main";

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
        <div className="display">
            <layout.Overlay navBarIsOpen={process.navBarIsOpen}
                openNavBar={process.toggleNavBar}
            />
            <layout.Header openNavBar={process.toggleNavBar}/>

            <Main />                                  
            
            <layout.Navbar navBarIsOpen={process.navBarIsOpen}/>    
            <layout.PlayerControlsBar />                       
        </div>
    )
}


