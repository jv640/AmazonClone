import React from 'react'
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
                    {userInfo && userInfo.isAdmin && (
                    <div className="dropdown">
                        <a href="#">Admin</a>
                        <ul className="dropdown-content">
                        <li>
                            <Link to="/orders">Orders</Link>
                            <Link to="/addproducts">Products</Link>
                        </li>
                        </ul>
                    </div>
                    )}
                </div>
            </header>
            <Sidebar />
        </div>
    )
}

export default Header
