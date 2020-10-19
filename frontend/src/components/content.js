import './content.css';
import Product from './product';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Content() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return () => {
            //
        };
    }, [])
    
    return (
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
