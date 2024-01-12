import "./TitleH1.scss";

export default function TitleH1({ color, text }: TProps)
{
    return (
        <h1 className={"title__h1 "+color}>
            { text }
        </h1>
    )
}