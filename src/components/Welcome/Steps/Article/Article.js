const Article = ({
    step,
    title,
    text
}) => {

    return (
        <article>
            <h4>{step}</h4>
            <h3>{title}</h3>
            <ul>
                {text.map(x => <li key={x}>{x}</li>)}
            </ul>
        </article>
    )
}

export default Article;