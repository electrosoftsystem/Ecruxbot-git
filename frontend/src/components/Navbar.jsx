import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Ecruxbot</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
