import { MainArticle, ArticleList } from './HydrateHomepage';

export function Homepage({ articles }) {
  return (
    <>
      <ul className="completeNewsList">
        <MainArticle articles={articles} />
        <ArticleList articles={articles} />
      </ul>
    </>
  );
}
