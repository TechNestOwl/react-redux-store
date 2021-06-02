import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav>
                <p>Logo</p>
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
}
