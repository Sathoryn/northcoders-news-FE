import { Homepage } from './components/HomePage.jsx';
import { useEffect, useState } from 'react';
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
      <Homepage articles={articles} />
    </>
  );
}

export default App;
