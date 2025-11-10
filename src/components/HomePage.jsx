import image from '../assets/paper.png';

export function Homepage({ articles }) {
  console.log(articles);

  function ArticleList() {
    const articleList = articles.map((article) => {
      const date = article.created_at.split('T')[0].split('-').reverse().join('-');

      return (
        <li class="articleListItem" key={article.article_id}>
          <h2>{article.title}</h2>
          <img class="articleImages" src={article.article_img_url} alt="" />
          <h3>{article.topic}</h3>
          <p>
            {article.author}, {date}
          </p>
          <button type="button" alt="like button">
            like
          </button>
        </li>
      );
    });
    return articleList;
  }

  return (
    <>
      <header>
        <h1>News</h1>
        <img id="newsPaperImage" src={image} alt="image of a news paper" />
      </header>

      <section className="search">
        <label htmlFor="searchBar">Search Topic:</label>
        <input id="searchBar" type="search" />
        <button type="button">Coding</button>
        <button type="button">Football</button>
        <button type="button">Cooking</button>
      </section>

      <ul>
        <ArticleList />
      </ul>

      <footer>footer information</footer>
    </>
  );
}
