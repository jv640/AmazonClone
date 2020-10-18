import React, { Component } from 'react'
import './content.css';
import Product from './product';
import Data from './data';
export class content extends Component {
    render() {

        return (
            <div>
                <ul className = "products">
                    {
                        Data.products.map(product =>
                            <li><Product product={product}/></li>
                        )
                    }
                    
                </ul>
            </div>
        )
    }
}

export default content
