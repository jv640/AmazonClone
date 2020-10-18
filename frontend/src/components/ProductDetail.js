import React from 'react'
import Data from './data';
// import './ProductDetail.css'

function ProductDetail(props) {
    console.log(props.match.params.id);
    const prod = Data.products.find(x => x._id == props.match.params.id);
    return (
        <div>
            <h1>{prod.name}</h1>
        </div>
    )
}
export default ProductDetail;
