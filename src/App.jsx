import { useState } from 'react';
import image from './assets/paper.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>News</h1>
        <img id="newsPaperImage" src={image} alt="image of a news paper" />
      </header>
      <div className="search">
        <label htmlFor="searchBar">Search Topic:</label>
        <input id="searchBar" type="search" />
      </div>

      <div className="topicButtons">
        <button>Coding</button>
        <button>Football</button>
        <button>Cooking</button>
      </div>
      <footer>footer information</footer>
    </>
  );
}

export default App;
