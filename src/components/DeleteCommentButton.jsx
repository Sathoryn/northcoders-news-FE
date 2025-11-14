import { deleteComment } from '../utils/deleteCommentUtils';
export function DeleteCommentButton({ commentData }) {
  const { comment_id, comments, setComments } = commentData;

  return (
    <>
      <button
        className="delete-comment"
        id={comment_id}
        type="button"
        alt="delete-comment"
        onClick={() => {
          deleteComment(comment_id, comments, setComments);
        }}
      >
        Delete comment
      </button>
    </>
  );
}
