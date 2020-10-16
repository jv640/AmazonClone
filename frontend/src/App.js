import React from 'react';
import './App.css';

function openMenu() {
  document.querySelector(".sidebar").classList.add("open");
}

function closeMenu() {
  document.querySelector(".sidebar").classList.remove("open");
}

function App() {
  return (
    <div className="grid-container">
      <header className = "header">
        <div className = "brand">
          <button onClick ={openMenu}>&#9776;</button>
          <a href = "index.html">Amazona</a>
        </div>
        
        <div className = "header-links">
          <a href = "cart.html">Cart</a>
          <a href = "signin.html">Sign In</a>
        </div>
      </header>
      <aside className = "sidebar">
        <h3>Shopping Categories</h3>
        <button className = "sidebar-close-button" onClick = {closeMenu}>x</button>
        <li><a href="index.html">Item 1</a></li>
        <li><a href="index.html">Item 2</a></li>
        <li><a href="index.html">Item 3</a></li>
      </aside>
      <main className = "main">
        <div className = "content">
          <ul className = "products">
            <li>
              <div className="product">
                <img className = "product-image" src = "/images/file1.jpg" alt="image"/>
                <div className = "product-name">
                  <a href="product.html">Friend</a>
                </div>
                <div className = "product-brand">True</div>
                <div className = "product-price">Rs 2</div>
                <div className = "product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className = "product-image" src = "/images/file1.jpg" alt="image"/>
                <div className = "product-name">
                  <a href="product.html">Friend</a>
                </div>
                <div className = "product-brand">True</div>
                <div className = "product-price">Rs 2</div>
                <div className = "product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className = "product-image" src = "/images/file1.jpg" alt="image"/>
                <div className = "product-name">
                  <a href="product.html">Friend</a>
                </div>
                <div className = "product-brand">True</div>
                <div className = "product-price">Rs 2</div>
                <div className = "product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className = "product-image" src = "/images/file1.jpg" alt="image"/>
                <div className = "product-name">
                  <a href="product.html">Friend</a>
                </div>
                <div className = "product-brand">True</div>
                <div className = "product-price">Rs 2</div>
                <div className = "product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className = "product-image" src = "/images/file1.jpg" alt="image"/>
                <div className = "product-name">
                  <a href="product.html">Friend</a>
                </div>
                <div className = "product-brand">True</div>
                <div className = "product-price">Rs 2</div>
                <div className = "product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className = "product-image" src = "/images/file1.jpg" alt="image"/>
                <div className = "product-name">
                  <a href="product.html">Friend</a>
                </div>
                <div className = "product-brand">True</div>
                <div className = "product-price">Rs 2</div>
                <div className = "product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className = "footer">All right reserved</footer>
    </div>
  );
}

export default App;
