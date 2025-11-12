export function handleArticleVotes(article, setArticle, hasVoted, setHasVoted) {
  if (!hasVoted) {
    const newVote = article.votes + 1;

    setArticle({ ...article, votes: newVote });
    setHasVoted(true);
  } else {
    const newVote = article.votes - 1;
    setArticle({ ...article, votes: newVote });
    setHasVoted(false);
  }
}

export function handleCommentVotes(id, comments, setComments, hasVoted, setHasVoted) {
  let newVote = null;
  const newComments = comments.map((comment) => {
    if (comment.comment_id === id) {
      if (!hasVoted[id]) {
        newVote = comment.votes + 1;
        setHasVoted((prev) => ({ ...prev, [id]: true }));
      } else {
        newVote = comment.votes - 1;
        setHasVoted((prev) => ({ ...prev, [id]: false }));
      }
      return { ...comment, votes: newVote };
    }
    return comment;
  });
  setComments([...newComments]);
}
