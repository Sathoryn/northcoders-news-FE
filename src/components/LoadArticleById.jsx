import { useEffect, useState } from 'react';
import { fetchArticle } from '../api';
import { ArticleById } from './HydrateArticleById';

export function LoadArticle({ article_id }) {
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    fetchArticle(article_id).then((article) => {
      setArticle(article);
      setLoading(false);
    });
  }, []);

  if (isLoading === true) return <p>Loading...</p>;
  return (
    <>
      <ArticleById data={[article, setArticle, hasVoted, setHasVoted]} />
    </>
  );
}
