import { Link } from 'react-router-dom';

export function Homepage({ articles }) {

  function MainArticle() {
    const mainArticle = articles[0];
    console.log(mainArticle);
    const { article_id, title, topic, author, article_img_url, votes } = mainArticle;
    const date = mainArticle.created_at.split('T')[0].split('-').reverse().join('-');

    return (
      <li className="main-article-item" key={article_id}>
        <h2>{title}</h2>
        <h4>
          {topic}, {author}, {date}
        </h4>

        <Link to={`/articles/${article_id}`} state={{ mainArticle }}>
          <img className="main-article-image" src={article_img_url} alt={title} />
        </Link>

        <h5>likes: {votes}</h5>
      </li>
    );
  }

  function ArticleList() {
    const articleList = articles.slice(1).map((article) => {
      const { article_id, title, topic, author, article_img_url, votes } = article;
      const date = article.created_at.split('T')[0].split('-').reverse().join('-');

      return (
        <li className="article-item" key={article_id}>
          <h2>{title}</h2>
          <h4>
            {topic}, {author}, {date}
          </h4>

          <Link to={`/articles/${article_id}`} state={{ article }}>
            <img className="article-image" src={article_img_url} alt={title} />
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
        <MainArticle />
        <ArticleList />
      </ul>
    </>
  );
}
