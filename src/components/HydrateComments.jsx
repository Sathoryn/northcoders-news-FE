export function CommentsList({ comments }) {
  const commentsList = comments.map((comment) => {
    const { body, author, votes, comment_id } = comment;
    const date = comment.created_at.split('T')[0].split('-').reverse().join('-');

    return (
      <li className="comments" key={comment_id}>
        <h4>
          {author}, {date}
        </h4>
        <p>{body}</p>
        <button className="like-button " id={comment_id} type="button" alt="like button">
          likes: {votes}
        </button>
      </li>
    );
  });
  return commentsList;
}
