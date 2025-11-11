import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchArticleAndComments } from '../api';

export function ArticlePage() {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function CommentsList() {
    const commentsList = comments.map((comment) => {
      const { body, author, votes, comment_id } = comment;
      const date = comment.created_at.split('T')[0].split('-').reverse().join('-');

      return (
        <li className="comments" key={comment_id}>
          <h4>
            {author}, {date}
          </h4>
          <p>{body}</p>
          <button className="like-button " id={comment_id} type="button" alt="like button">
            likes: {votes}
          </button>
        </li>
      );
    });
    return commentsList;
  }

  useEffect(() => {
    fetchArticleAndComments(article_id, setComments, setArticle, setLoading);
  }, []);

  if (isLoading === true) return <p>Loading...</p>;

  const { title, topic, author, article_img_url, votes, body } = article;
  const date = article.created_at.split('T')[0].split('-').reverse().join('-');

  return (
    <>
       <div className="main-article-item">
          <Link to="/">
            <button className="back-home-button">Back to Homepage</button>
          </Link>
          <h2>{title}</h2>
          <h4>
            {topic}, {author}, {date}
          </h4>
          <Link to={`/articles/${article_id}`} state={{ article }}>
            <img className="main-article-image" src={article_img_url} alt={title} />
          </Link>
          <p>{body}</p>
          <button className="like-button " id={article_id} type="button" alt="like button">
            likes: {votes}
          </button>{' '}
        </div>

      <ul className='comments-list'>
      <CommentsList />
      </ul>

    </>
  );
}
