import { putArticleVote } from '../api';

export function handleArticleVotes({ article, setArticle, hasVoted, setHasVoted }) {
  let newVote = article.votes;
  if (!hasVoted) {
    newVote++;
    setArticle({ ...article, votes: newVote });
    setHasVoted(true);
  } else {
    --newVote;
    setArticle({ ...article, votes: newVote });
    setHasVoted(false);
  }

  putArticleVote(article, newVote);
}

export function handleCommentVotes(clickedComment_id, {comments, setComments, hasVoted, setHasVoted}) {
  let newVote = null;
  const newComments = comments.map((comment) => {
    if (comment.comment_id === clickedComment_id) {
      if (!hasVoted[clickedComment_id]) {
        newVote = comment.votes + 1;
        setHasVoted({ ...hasVoted, [clickedComment_id]: true });
      } else {
        newVote = comment.votes - 1;
        setHasVoted({ ...hasVoted, [clickedComment_id]: false });
      }
      return { ...comment, votes: newVote };
    }
    return comment;
  });
  setComments([...newComments]);
}
