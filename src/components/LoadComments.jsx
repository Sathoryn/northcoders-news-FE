import { useEffect, useState } from 'react';
import { fetchComments } from '../api';
import { CommentsList } from './HydrateComments';

export function LoadComments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, []);

  if (isLoading === true) return <p>Loading...</p>;

  return (
    <>
      <ul className="comments-list">
        <CommentsList comments={comments} />
      </ul>
    </>
  );
}
