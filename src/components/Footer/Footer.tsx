import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer d-f jc-sb align-center">
      <div>
        <div><img src="images/footer-logo.png" alt="footer-logo" /></div>
        <p className="footer-desc">
          Some random stuff about flower shop and some more info cuz this box had to get fill
          Some random stuff about flower shop and some more info cuz this box had to get fill
          Some random stuff about flower shop and some more info cuz this box had to get fill
        </p>
      </div>
      <div>
        <div className="footer-bl-title">Links</div>
        <ul className="footer-bl-list d-f">
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-bl-title">Links</div>
        <ul className="footer-bl-list d-f">
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-bl-title">Contact</div>
        <div className="footer-bl-location">26985 Brighton Lane, Lake Forest, CA</div>
        <div className="footer-bl-email">support@Flowers.com</div>
        <div className="footer-bl-phone">+1 236 5489</div>
      </div>
    </footer>
  )
}

export default Footer