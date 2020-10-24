import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/footer';
import ProductDetail from './components/ProductDetail';
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import {useSelector} from 'react-redux';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
function App () {
  

  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header className = "header"/>
        <main className="main">
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/signin" component={SignIn} />
          <Route path="/products" component={AddProduct} />
          <Route path="/register" component={Register} />
          <Route path="/products/:id"  component={ProductDetail} />
          <Route path="/" exact={true} component={Content} />
        </main>
        {/* <Content className = "main"/> */}
        < Footer className = "footer"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
