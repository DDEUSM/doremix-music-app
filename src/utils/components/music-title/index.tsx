import { TProps } from "./types";
import "./music-title.scss";

export default function MusicTitle({ color, text }: TProps)
{
    return (
        <p className={"music_title "+color}>
            { text }
        </p>
    )
}