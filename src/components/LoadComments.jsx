import { useEffect, useState } from 'react';
import { fetchComments } from '../api';
import { CommentsList } from './CommentsList';
// import noVote from '../assets/noVote.png'; 

export function LoadComments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState({});
  // const [hasVotedImage, setHasVotedImage] = useState({});

  useEffect(() => {
    fetchComments(article_id)
      .then((comments) => {
        setComments(comments);
        setLoading(false);
        return comments;
      })
      .then((comments) => {
        setHasVoted(comments.reduce((obj, comment) => Object.assign(obj, { [comment.comment_id]: false }), {}));
        return hasVoted;
      });
  }, [article_id]);

  if (isLoading === true) return <p>Loading...</p>;

  return (
    <>
    
      <ul className="comments-list">
        <CommentsList commentsData={{ comments, setComments, hasVoted, setHasVoted }} />
      </ul>
    </>
  );
}
