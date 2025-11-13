import { Link } from 'react-router-dom';

export function MainArticle({ articles }) {

  const mainArticle = articles[0];
  const { article_id, title, topic, author, article_img_url, votes, created_at} = mainArticle;
  const date = created_at.split('T')[0].split('-').reverse().join('-');

  return (
    <li className="main-article-item" key={article_id}>
      <h2>{title}</h2>
      <h3>
        {topic}, {author}, {date}
      </h3>

      <Link to={`/articles/${article_id}`} state={{ mainArticle }}>
        <img className="main-article-image" src={article_img_url} alt={title} />
      </Link>

      <h5>likes: {votes}</h5>
    </li>
  );
}