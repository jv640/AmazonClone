import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {listProducts, saveProduct, deleteProduct} from '../actions/productAction';
import './addproduct.css'



function AddProduct (props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');

    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;
    const productSave = useSelector(state => state.productSave);
    const productDelete = useSelector(state => state.productDelete);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = productDelete;
    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
            //
        }
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({_id: id, name, price, image, brand, category, countInStock, description}));
    };

    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
    };
  
    return (
        <div>
            <div className="content content-margined">
                <div className="product-header">
                    <h3>Products</h3>
                    <button onClick={() => openModal({})}>Create Product</button>
                </div>
                {modalVisible && (
                    <div className="form">
                        <form onSubmit={submitHandler} action="">
                            <ul className="form-container">
                                <li>
                                    <h2>Create Product</h2>
                                </li>
                                <li>
                                    {loadingSave && <div>loading...</div>}
                                    {errorSave && <div>{errorSave}</div>}
                                    {/* {loadingDelete && <div>Deleting...</div>}
                                    {errorDelete && <div>{errorDelete}</div>} */}
                                </li>
                                <li>
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                    <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor="price">
                                        Price (in Rs)
                                    </label>
                                    <input type="number" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor="image">
                                        Image
                                    </label>
                                    <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor="brand">
                                        Brand
                                    </label>
                                    <input type="text" name="brand" value={brand} id="brand" onChange={(e) => setBrand(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor="category">
                                        category
                                    </label>
                                    <input type="text" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor="countInStock">
                                        CountInStock
                                    </label>
                                    <input type="number" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor="description">
                                        Description of Product
                                    </label>
                                    <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)} />
                                </li>
                                <li>
                                    <button type="submit" className="button primary">{id ? "Update" : "Create Product"}</button>
                                    <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Cancel</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                )}
                
                <div className="product-list">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {products && products.map(product => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.image}</td>
                                    <td>
                                        <button onClick={() => openModal(product)}>Edit</button>
                                        <button onClick={() => deleteHandler(product)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
