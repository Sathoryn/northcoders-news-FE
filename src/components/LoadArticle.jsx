import { useEffect, useState } from 'react';
import { fetchArticle } from '../api';
import { SingleArticle } from './SingleArticle';

export function LoadArticle({ article_id_comment_data }) {
  const { article_id, comments, setComments,user } = article_id_comment_data;
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    fetchArticle(article_id).then((article) => {
      setArticle(article);
      setLoading(false);
    });
  }, [article_id]);

  if (isLoading === true) return <p>Loading...</p>;

  return (
    <>
      <SingleArticle articleData={{ article, setArticle, hasVoted, setHasVoted, comments, setComments,user }} />
    </>
  );
}
