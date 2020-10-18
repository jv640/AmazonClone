import React, { Component } from 'react'
import './content.css';
import Porduct from './product';
export class content extends Component {
    render() {
        return (
            <div>
                <ul className = "products">
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                    <li><Porduct /></li>
                </ul>
            </div>
        )
    }
}

export default content
