import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {listProducts, saveProduct} from '../actions/productAction';

function AddProduct (props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');

    const productSave = useSelector(state => state.productSave);
    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            cleanup
        }
    }, [input])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({name, price, image, brand, category, countInStock, description}));

    }
    return (
        <div className="form">
            <form onSubmit={submitHandler} action="">
                <ul className="form-container">
                    <li>
                        <h2>Create Product</h2>
                    </li>
                    <li>
                        {loadingSave && <div>loading...</div>}
                        {errorSave && <div>{errorSave}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="price">
                            Price (in Rs)
                        </label>
                        <input type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="image">
                            Image
                        </label>
                        <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="brand">
                            Brand
                        </label>
                        <input type="text" name="brand" id="brand" onChange={(e) => setBrand(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="category">
                            category
                        </label>
                        <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="countInStock">
                            CountInStock
                        </label>
                        <input type="number" name="countInStock" id="countInStock" onChange={(e) => setCountInStock(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="description">
                            Description of Product
                        </label>
                        <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)} />
                    </li>
                    <li>
                        <button type="submit" className="button primary">Create Product</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default AddProduct;
