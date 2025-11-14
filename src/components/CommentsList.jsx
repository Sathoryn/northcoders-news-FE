import { handleCommentVotes } from '../utils/votingUtils';
import noVote from '../assets/noVote.png';
import { DeleteCommentButton } from './DeleteCommentButton';

export function CommentsList({ commentsData }) {
  const { comments, setComments, user } = commentsData;

  return comments.map((comment) => {
    const { body, author, votes, comment_id } = comment;
    const date = comment.created_at.split('T')[0].split('-').reverse().join('-');

    return (
      <li className="comments" key={comment_id}>
        <h4>
          {author}, {date}
        </h4>
        <p>{body}</p>

        <section className="comment-vote-buttons">
          <img
            src={noVote}
            className="vote-button "
            id={comment_id}
            type="button"
            alt="like button"
            onClick={() => {
              handleCommentVotes(comment_id, commentsData);
            }}
          />
          <label htmlFor="comment-vote-button">Votes:{votes}</label>

          {author === user && <DeleteCommentButton commentData={{ comment_id, comments, setComments }} />}
        </section>
      </li>
    );
  });
}
[];
