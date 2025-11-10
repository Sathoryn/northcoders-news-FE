
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
  ]).then(()=>{
    setLoading(false)
  }).catch(()=>{
    console.log('Something is broken.')
  })

}
