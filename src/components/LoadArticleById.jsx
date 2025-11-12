import { useEffect, useState } from 'react';
import { fetchArticle } from '../api';
import { ArticleById } from './HydrateArticleById';

export function LoadArticle({ article_id }) {
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle(article_id).then((article) => {
      setArticle(article);
      setLoading(false);
    });
  }, []);

  if (isLoading === true) return <p>Loading...</p>;

  return (
    <>
      <ArticleById article={article} />
    </>
  );
}
