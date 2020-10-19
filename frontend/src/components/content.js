import './content.css';
import Product from './product';
import React, { useEffect } from 'react';
import { listProducts } from '../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';


function Content() {
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, [])
    
    return (
        loading ? <div>Loading....</div>:
        error ? <div>{error}</div>:
            <div>
                <ul className = "products">
                    {
                        products.map(product =>
                            <li key={product._id}><Product product={product}/></li>
                        )
                    }
                    
                </ul>
            </div>
        )
}

export default Content
