import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/footer';
import ProductDetail from './components/ProductDetail';
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import PlaceOrder from './components/PlaceOrder';
import Profile from './components/Profile';
import Order from './components/Order';
import Orders from './components/Orders';
 
function App () {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header className = "header"/>
        <main className="main">
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/signin" component={SignIn} />
          <Route path="/addproducts" component={AddProduct} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/order/:id" component={Order} />
          <Route path="/orders" component={Orders} />
          <Route path="/register" component={Register} />
          <Route path="/products/:id"  component={ProductDetail} />
          <Route path="/profile"  component={Profile} />
          <Route path="/" exact={true} component={Content} />
        </main>
        {/* <Content className = "main"/> */}
        < Footer className = "footer"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
