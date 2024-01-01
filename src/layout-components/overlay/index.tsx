import { TBackgroundBlurProps } from "./types";
import "./overlay.scss";

export default function({ navBarIsOpen, openNavBar }: TBackgroundBlurProps)
{
    return (
        <div className={`background__blur ${navBarIsOpen?(
            `background__blur__on`):(``)}`}
            onClick={openNavBar}
            >
        </div>
    )
}