import { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleArticleVotes } from '../utils/votingUtils';
import { addCommentToArticle } from '../utils/addCommentToArticleUtils';

import noVote from '../assets/noVote.png';
import upVote from '../assets/upVote.png';

export function SingleArticle({ articleData }) {
  const { article, hasVoted, comments, setComments } = articleData;

  const { article_id, title, topic, author, article_img_url, votes, body, created_at } = article;
  const date = created_at.split('T')[0].split('-').reverse().join('-');

  const [commentText, setCommentText] = useState('');

  const hasVotedImage = hasVoted ? upVote : noVote;

  return (
    <section className="main-article-item">
      <Link to="/">
        <button className="back-home-button">Back to Homepage</button>
      </Link>
      <h2>{title}</h2>
      <h3>
        {topic}, {author}, {date}
      </h3>
      <img className="main-article-image" src={article_img_url} alt={title} />
      <p>{body}</p>

      <section className="add-comment-to-article">
        <textarea
          className="add-comment"
          type="text"
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        />
      </section>

      <section className="article-vote-button">
        <img
          src={hasVotedImage}
          className="vote-button "
          id={article_id}
          type="button"
          alt="like button"
          onClick={() => {
            handleArticleVotes(articleData);
          }}
        />
        <label htmlFor="vote-button">Votes:{votes}</label>
        <button
          className="submit-comment"
          id={article_id}
          type="button"
          alt="like button"
          onClick={() => {
            addCommentToArticle({ article_id, commentText, setCommentText, comments, setComments });
          }}
        >
          Comment
        </button>
      </section>
    </section>
  );
}


