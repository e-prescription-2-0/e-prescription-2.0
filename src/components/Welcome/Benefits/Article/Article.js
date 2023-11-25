import style from "./Article.module.css"

const Article = ({
    className,
    title,
    text
}) => {
    return (
        <article>
            <div className={style["title-info"]}>
                <i className={className}></i>
                <h3>{title}</h3>
            </div>
            <p>{text}</p>
        </article>
    )
}

export default Article;