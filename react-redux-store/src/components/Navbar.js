import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <div className="navBar">
            <nav>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <ul className="nav-links">
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/cart#">
                        <li>Cart</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
};
