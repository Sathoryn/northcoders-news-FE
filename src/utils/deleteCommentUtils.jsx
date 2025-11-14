import { deleteCommentFromArticle } from '../api';

export function deleteComment( comment_id, comments, setComments ) {
  console.log(comment_id,comments,setComments)
  deleteCommentFromArticle(comment_id)
    .then(() => {
      const updatedComments = comments.filter((comment) => {
        if (comment.comment_id != comment_id) return comment;
      });
      setComments(updatedComments);
    })
    .catch((error) => {
      console.error('Error!', error);
    });
}
