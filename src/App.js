import React from 'react';
import NewsComponent from './components/NewsComponent';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>News Search App</h1>
        <NewsComponent />
      </div>
    </div>
  );
}

export default App;
