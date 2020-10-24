import React, { Component } from 'react'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './header.css';
import Sidebar from './sidebar';

function openMenu() {
    document.querySelector(".sidebar").classList.add("open");
}


function Header () {
    const userSignIn = useSelector(state => state.userSignin);
    const {userInfo} = userSignIn;

    return (
        <div>
            <header>
                <div className = "brand">
                    <button onClick ={openMenu}>&#9776;</button>
                    <Link to="/" >Amazona</Link>
                </div>
                
                <div className="header-links">
                    <Link to="/cart">Cart</Link>
                    {
                        userInfo ? <Link to="/profile">Welcome {userInfo.name}</Link> :
                            <Link to="/signin">Sign In</Link>
                    }
                </div>
            </header>
            <Sidebar />
        </div>
    )
}

export default Header
