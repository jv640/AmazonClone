import React, { Component } from 'react'
import './product.css';
export class product extends Component {
    render() {
        return (
            <div className="product">
                <img className = "product-image" src ={this.props.product.image} alt="image"/>
                <div className = "product-name">
                    <a href="product.html">{this.props.product.name}</a>
                </div>
                <div className = "product-brand">{this.props.product.brand}</div>
                <div className = "product-price">Rs {this.props.product.price}</div>
                <div className = "product-rating">{this.props.product.rating} stars ({this.props.product.numReview} reviews)</div>
            </div>
        )
    }
}

export default product
