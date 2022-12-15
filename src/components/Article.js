function Article(props) {
    return(
        <article>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : "January 1, 1970" }{" • " + props.minutes + " minutes"}</small>
            <p>{props.preview}</p>
        </article>
    );
}

export default Article;