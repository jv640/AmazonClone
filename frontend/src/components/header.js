import React, { Component } from 'react'
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
                        <a href = "index.html">Amazona</a>
                    </div>
                    
                    <div className = "header-links">
                        <a href = "cart.html">Cart</a>
                        <a href = "signin.html">Sign In</a>
                    </div>
                </header>
                <Sidebar />
            </div>
        )
    }
}

export default header
