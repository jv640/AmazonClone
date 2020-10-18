import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import ProductDetail from './components/ProductDetail';
import {BrowserRouter, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header className = "header"/>
        <main className="main">
          <Route path="/" exact={true} component={Content} />
          <Route path="/products/:id"  component={ProductDetail} />
        </main>
        {/* <Content className = "main"/> */}
        < Footer className = "footer"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
