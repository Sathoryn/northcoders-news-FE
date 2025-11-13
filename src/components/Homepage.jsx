import { MainArticle } from './MainArticle';
import { ArticleList } from './ArticleList';

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
