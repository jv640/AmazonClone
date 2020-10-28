import './content.css';
import Product from './product';
import React, { useEffect, useState } from 'react';
import { listProducts } from '../actions/productAction';
import {useSelector, useDispatch} from 'react-redux';


function Content (props) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id : '';
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts(category));
        return () => {
            //
        };
    }, [category]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };
    const sortHandler = (e) => {
        setSortOrder(e.target.value);
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };
    
    return (
        <>
            {category && <h2>{category}</h2>}

            <ul className="filter">
                <li>
                <form onSubmit={submitHandler}>
                    <input
                    name="searchKeyword"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                </li>
                <li>
                Sort By{' '}
                <select name="sortOrder" onChange={sortHandler}>
                    <option value="">Newest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
                </li>
            </ul>
            {loading ? <div>Loading....</div> :
                error ? <div>{error}</div> :
                    <div>
                        <ul className="products">
                            {
                                products.map(product =>
                                    <li key={product._id}><Product product={product} /></li>
                                )
                            }
                        
                        </ul>
                    </div>
            }
        </>
        )
}

export default Content
