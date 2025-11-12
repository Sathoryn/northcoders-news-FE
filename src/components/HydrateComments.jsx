import { handleCommentVotes } from './Vote';

export function CommentsList({ data: [comments, setComments, hasVoted, setHasVoted] }) {
  return comments.map((comment) => {
    const { body, author, votes, comment_id } = comment;
    const date = comment.created_at.split('T')[0].split('-').reverse().join('-');

    
    return (
      <li className="comments" key={comment_id}>
        <h4>
          {author}, {date}
        </h4>
        <p>{body}</p>
        <button
          className="like-button "
          id={comment_id}
          type="button"
          alt="like button"
          onClick={() => {
            handleCommentVotes(comment_id, comments, setComments, hasVoted, setHasVoted);
          }}
        >
          likes: {votes}
        </button>
      </li>
    );
  });
}
