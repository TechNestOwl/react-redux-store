import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className="footer">
                <ul>
                    <Link to="/contact">
                        <li>Contact</li>   
                    </Link>
                    {/* <Link to="#">
                        <li>About The Developer</li>   
                    </Link> */}
                </ul>
        </div>
    )
}
