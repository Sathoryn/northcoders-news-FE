import { useParams } from 'react-router-dom';
import { LoadArticle } from './LoadArticle';
import { LoadComments } from './LoadComments';


export function ArticlePage() {
  const { article_id } = useParams();



  return (
    <>
      <LoadArticle article_id={article_id} />
      <LoadComments article_id={article_id} />
    </>
  );
}
