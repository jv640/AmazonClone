import React, { Component } from 'react'
import './product.css';
export class product extends Component {
    render() {
        return (
            <div className="product">
                <img className = "product-image" src = "/images/file1.jpg" alt="image"/>
                <div className = "product-name">
                    <a href="product.html">Friend</a>
                </div>
                <div className = "product-brand">True</div>
                <div className = "product-price">Rs 2</div>
                <div className = "product-rating">4.5 stars (10 reviews)</div>
            </div>
        )
    }
}

export default product
