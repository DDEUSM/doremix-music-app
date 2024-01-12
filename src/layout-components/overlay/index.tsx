import { TBackgroundBlurProps } from "./types";
import "./overlay.scss";

export default function({ navBarIsOpen, openNavBar }: TBackgroundBlurProps)
{
    return (
        <div className={`overlay ${navBarIsOpen?(
            `overlay__on`):(``)}`}
            onClick={openNavBar}
            >
        </div>
    )
}