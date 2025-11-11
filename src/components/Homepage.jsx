import { Link } from 'react-router-dom';

export function Homepage({ articles }) {
  function ArticleList() {
    const articleList = articles.map((article, i) => {
      const { article_id, title, topic, author, article_img_url, votes } = article;
      const date = article.created_at.split('T')[0].split('-').reverse().join('-');

      if (i === 0) {
        return (
          <li className="mainArticleItem" key={article_id}>
            <h2>{title}</h2>
            <h4>
              {topic}, {author}, {date}
            </h4>

            <Link to={`/articles/${article_id}`} state={{ article }}>
              <img className="mainArticleImage" src={article_img_url} alt={title} />
            </Link>

            <h5>likes: {votes}</h5>
          </li>
        );
      }

      return (
        <li className="articleListItem" key={article_id}>
          <h2>{title}</h2>
          <h4>
            {topic}, {author}, {date}
          </h4>

          <Link to={`/articles/${article_id}`} state={{ article }}>
            <img className="articleImages" src={article_img_url} alt={title} />
          </Link>

          <h5>likes: {votes}</h5>
        </li>
      );
    });
    return articleList;
  }

  return (
    <>
      <ul id="completeNewsList">
        <ArticleList />
      </ul>
    </>
  );
}
