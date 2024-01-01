import "./TitleH1.scss";

type TProps = {
    text: string,
}

export default function({ text }: TProps)
{
    return(
        <h1 className="title__h1">
            { text }
        </h1>
    )
}