import { useParams } from 'react-router-dom';
import { LoadArticle } from './LoadArticle';
import { LoadComments } from './LoadComments';
import { useState } from 'react';

export function ArticlePage() {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);
  const user = 'jessjelly'

  return (
    <>
      <LoadArticle article_id_comment_data={{article_id,comments,setComments}}  />
      <LoadComments article_id_comment_data={{article_id,comments,setComments,user}}/>
    </>
  );
}
