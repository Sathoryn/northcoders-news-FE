import { Link } from 'react-router-dom';

export function ArticleById( {article} ) {
  const { article_id, title, topic, author, article_img_url, votes, body,created_at } = article;
  const date = created_at.split('T')[0].split('-').reverse().join('-');

  return (
    <section className="main-article-item">
      <Link to="/">
        <button className="back-home-button">Back to Homepage</button>
      </Link>
      <h2>{title}</h2>
      <h3>
        {topic}, {author}, {date}
      </h3>
      <img className="main-article-image" src={article_img_url} alt={title} />
      <p>{body}</p>
      <button className="like-button " id={article_id} type="button" alt="like button">
        likes: {votes}
      </button>
    </section>
  );
}
