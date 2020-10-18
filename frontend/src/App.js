import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
function App() {
  return (
    <div className="grid-container">
      <Header className = "header"/>
      <Content className = "main"/>
      < Footer className = "footer"/>
    </div>
  );
}

export default App;
