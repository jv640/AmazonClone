import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './header.css';
import Sidebar from './sidebar';

function openMenu() {
    document.querySelector(".sidebar").classList.add("open");
}
export class header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className = "brand">
                        <button onClick ={openMenu}>&#9776;</button>
                        <Link to="/" >Amazona</Link>
                    </div>
                    
                    <div className="header-links">
                        <Link to="/cart">Cart</Link>
                        <Link to="/signin">Sign In</Link>
                    </div>
                </header>
                <Sidebar />
            </div>
        )
    }
}

export default header
