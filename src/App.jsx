import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Homepage } from './components/Homepage.jsx';
import { ArticlePage } from './components/ArticlePage.jsx';
import { useEffect, useState } from 'react';
import image from './assets/paper.png';
import { fetchApi } from './api.js';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
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
        <button type="button">Coding</button>
        <button type="button">Football</button>
        <button type="button">Cooking</button>
      </section>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage articles={articles} />}></Route>
          <Route exact path="/ArticlePage" element={<ArticlePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
