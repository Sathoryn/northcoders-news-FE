import { Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage.jsx';
import { ArticlePage } from './components/ArticlePage.jsx';
import { useEffect, useState } from 'react';
import image from './assets/paper.png';
import { fetchApi } from './api.js';
import './App.css';

function App() {
  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchApi(setTopics, setArticles, setUsers, setLoading);
  }, []);

  if (isLoading === true) return <p>Loading...</p>;

  return (
    <>
      <header>
        <h1>News</h1>
        <img id="newsPaperImage" src={image} alt="image of a news paper" />
      </header>

      <section className="search">
        <label htmlFor="searchBar">Search Topic: </label>
        <input id="searchBar" type="search" />
        <button className="searchButton">Coding</button>
        <button className="searchButton">Football</button>
        <button className="searchButton">Cooking</button>
      </section>

      <Routes>
        <Route path="/" element={<Homepage articles={articles} />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
      </Routes>

      <footer>footer information</footer>
    </>
  );
}

export default App;
