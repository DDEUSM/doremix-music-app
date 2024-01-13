import { TProps } from "./types";
import "./author-title.scss";

export default function AuthorTitle({ color, text }: TProps)
{
    return (
        <p className={"author_title "+color}>
            { text }
        </p>
    )
}