import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './product.css';
export class product extends Component {
    render() {
        return (
            <div className="product">
                <Link to={"/products/" + this.props.product._id}> 
                    <img className = "product-image" src ={this.props.product.image} alt="product"/>
                </Link>
                <div className = "product-name">
                    <Link to={"/products/" + this.props.product._id}>{this.props.product.name}</Link>
                </div>
                <div className = "product-brand">{this.props.product.brand}</div>
                <div className = "product-price">Rs {this.props.product.price}</div>
                <div className = "product-rating">{this.props.product.rating} stars ({this.props.product.numReview} reviews)</div>
            </div>
        )
    }
}

export default product
