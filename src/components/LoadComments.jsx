import { useEffect, useState } from 'react';
import { fetchComments } from '../api';
import { CommentsList } from './CommentsList';

export function LoadComments({ article_id_comment_data }) {
  const { article_id, comments, setComments, user } = article_id_comment_data;
  const [isLoading, setLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState({});
  const [isUser, setIsUser] = useState({});

  useEffect(() => {
    fetchComments(article_id)
      .then((comments) => {
        setComments(comments);
        setLoading(false);
        return comments;
      })
      .then((comments) => {
        setHasVoted(
          comments.reduce((obj, comment) => {
            obj[comment.comment_id] = false;
            return obj;
          }, {})
        );
        return comments;
      })
      .then((comments) => {
        setIsUser(
          comments.reduce((obj, comment) => {
            obj[comment.comment_id] = user === comment.author ? true : false;
            return obj;
          }, {})
        );
      });
  }, [article_id]);

  if (isLoading === true) return <p>Loading...</p>;


  return (
    <>
      <ul className="comments-list">
        <CommentsList commentsData={{ article_id, comments, setComments, hasVoted, setHasVoted, user,isUser}} />
      </ul>
    </>
  );
}
