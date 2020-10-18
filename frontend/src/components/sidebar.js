import React, { Component } from 'react'
import './sidebar.css'

function closeMenu() {
    document.querySelector(".sidebar").classList.remove("open");
}

export class sidebar extends Component {
    render() {
        return (
            <div>
                <aside className = "sidebar">
                    <h3>Shopping Categories</h3>
                    <button className = "sidebar-close-button" onClick = {closeMenu}>x</button>
                    <li><a href="index.html">Item 1</a></li>
                    <li><a href="index.html">Item 2</a></li>
                    <li><a href="index.html">Item 3</a></li>
                </aside>
            </div>
        )
    }
}

export default sidebar
