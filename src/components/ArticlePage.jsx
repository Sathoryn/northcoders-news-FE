import { useParams } from 'react-router-dom';

import { LoadArticle } from './LoadArticleById';
import { LoadComments } from './LoadComments';
import { useEffect } from 'react';

export function ArticlePage() {
  const { article_id } = useParams();

  return (
    <>
      <LoadArticle article_id={article_id} />
      <LoadComments article_id={article_id} />
    </>
  );
}
