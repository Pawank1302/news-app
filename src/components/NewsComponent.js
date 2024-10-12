import React, { useState, useEffect } from 'react';
import { getNews, getLatestNews } from '../services/api';  // API functions
import './NewsComponent.css';  

const NewsComponent = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  // Fetch the latest news when the component mounts
  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await getLatestNews();
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching latest news', error);
      }
    };

    fetchLatestNews();
  }, []);

  // Handle search for specific news based on query
  const handleSearch = async () => {
    try {
      const response = await getNews(query);
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news', error);
    }
  };

  return (
    <div className="news-container">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search News</button>
      </div>

      <div className="card-grid">
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.urlToImage} alt="news" className="card-image" />
            <div className="card-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
