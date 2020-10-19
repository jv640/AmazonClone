import React, { Component } from 'react'
import Data from './data';
import {Link} from 'react-router-dom';
import './ProductDetail.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detailsProduct } from '../actions/productAction';
import { useState } from 'react';


function ProductDetail(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        }
    }, [])
    return (
        <div>
            <div><Link className="back" to="/">Back to results</Link></div>
            {
                loading ? <div>Loading....</div>:
                error ? <div>{error}</div>:
                (
                    <div className="details">
                    <div className="details-image">
                        <img src={product.image} alt="product"/>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li><h4>{product.name}</h4></li>
                            <li>{product.rating} Stars ({product.numReview} Reviews)</li>
                            <li><b> Rs {product.price}</b></li>
                            <li>
                                Description:
                                <div>{product.desc}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>Price: {product.price}</li>
                            <li>Status: {product.countInStock > 0 ? "In Stock":"Out of Stock" }</li>
                            <li>Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                {[...Array(product.countInStock).keys()].map( x =>
                                    <option key={x+1} value={x+1}>{x+1}</option>
                                )}
                                </select>
                            </li>
                            <li>
                                {product.countInStock > 0 && <button className="button">Add to Cart</button>}
                            </li>
                        </ul>
                    </div>
                </div>
                )
            }
            
        </div>
    )
}

export default ProductDetail;