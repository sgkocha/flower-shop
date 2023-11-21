import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header d-f jc-sb align-center">
        <div><img src="images/logo.png" alt="logo" /></div>
        <nav>
            <ul className="header-nav-list d-f align-center">
                <li><Link to="/">Home</Link></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
        <div className="header-controls d-f">
            <button><img src="images/user.png" alt="user" /></button>
            <button><img src="images/cart.png" alt="cart" /></button>
        </div>
    </header>
  )
}

export default Header