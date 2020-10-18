import React, { Component } from 'react'
import Data from './data';
import {Link} from 'react-router-dom';
import './ProductDetail.css'

export class ProductDetail extends Component {
    render() {
        const prod = Data.products.find(x => x._id == this.props.match.params.id);
        return (
            <div>
                <div><Link className="back" to="/">Back to results</Link></div>
                <div className="details">
                    <div className="details-image">
                        <img src={prod.image} alt="product"/>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li><h4>{prod.name}</h4></li>
                            <li>{prod.rating} Stars ({prod.numReview} Reviews)</li>
                            <li><b> Rs {prod.price}</b></li>
                            <li>
                                Description:
                                <div>{prod.desc}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>Price: {prod.price}</li>
                            <li>Status: {prod.status}</li>
                            <li>Qty: <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                </select>
                            </li>
                            <li>
                                <button className="button">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail

