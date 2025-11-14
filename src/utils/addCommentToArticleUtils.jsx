import { postCommentToArticle } from '../api';
// import { deleteCommentFromArticle } from '../api';


export function addCommentToArticle({ article_id, commentText, comments, setCommentText, setComments }) {
  if (commentText.length > 0 && commentText.length < 1000) {
    const body = commentText;
    const author = 'jessjelly';

    
    // {
    //   isUser[comment_id] && <DeleteCommentButton commentData={{ comment_id, comments, setComments }} />;
    // }

    postCommentToArticle(article_id, body, author)
      .then(({ comment }) => {
        console.log(comment)
        setComments([comment, ...comments]);
        setCommentText('');
      })
      .catch((error) => {
        console.error('Error!', error);
      });
  }
}
