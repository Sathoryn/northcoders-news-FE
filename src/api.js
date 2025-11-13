export function fetchApi(setTopics, setArticles, setUsers, setLoading) {
  return Promise.all([
    fetch('https://nc-news-be-cto4.onrender.com/api/topics')
      .then((res) => res.json())
      .then(({ topics }) => {
        setTopics(topics);
      }),
    fetch('https://nc-news-be-cto4.onrender.com/api/articles')
      .then((res) => res.json())
      .then(({ articles }) => {
        setArticles(articles);
      }),
    fetch('https://nc-news-be-cto4.onrender.com/api/users')
      .then((res) => res.json())
      .then(({ users }) => {
        setUsers(users);
      }),
  ])
    .then(() => {
      setLoading(false);
    })
    .catch(() => {
      console.log('Something is broken.');
    });
}

export function fetchComments(article_id) {
  return fetch(`https://nc-news-be-cto4.onrender.com/api/articles/${article_id}/comments`)
    .then((res) => res.json())
    .then(({ comments }) => {
      return comments;
    })
    .catch(() => {
      console.log('Something is broken.');
    });
}

export function fetchArticle(article_id) {
  return fetch(`https://nc-news-be-cto4.onrender.com/api/articles/${article_id}`)
    .then((res) => res.json())
    .then(({ article }) => {
      return article;
    })
    .catch(() => {
      console.log('Something is broken.');
    });
}

export function putArticleVote(article, newVote) {
  fetch(`https://nc-news-be-cto4.onrender.com/api/articles/${article.article_id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({ increaseVotes: newVote }),
  })
    .then((res) => {
      if (!res.ok) throw new Error('Nothing was updated something went wrong');
      return res.json();
    })
    .then((res) => {
      console.log('Vote successfully updated!', res);
    })
    .catch((error) => {
      console.error('Error!', error);
    });
}
