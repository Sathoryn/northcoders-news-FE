import { handleCommentVotes } from './votingUtils';

export function CommentsList({ commentsData }) {
  const {comments} = commentsData;
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
            handleCommentVotes(comment_id, commentsData);
          }}
        >
          likes: {votes}
        </button>
      </li>
    );
  });
}
