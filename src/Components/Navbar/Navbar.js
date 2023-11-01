import React from "react";
import "./Navbar.css";
import {
  RiSearchLine,
  RiUser3Fill,
  RiHeart3Fill,
  RiShoppingBag3Fill,
} from "react-icons/ri";

const Navbar = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();
  };

  return (
    <section id="Navbar">
      <div className="top-nav container" id="top-nav">
        <a href="/" className="logo" onClick={handleLogoClick}>
          TeeRex
        </a>
        <div className="Search-Box" id="Search">
          <input
            type="Search"
            name="Search"
            id=""
            placeholder="Search For Our Products"
          />
          <div className="Search-icon">
            <RiSearchLine />
          </div>
        </div>
        <div className="Top-nav-icons" id="Top-nav-icons">
          <a href="/user">
            <RiUser3Fill />
          </a>
          <a className="fav-icon" href="/Fav">
            <RiHeart3Fill /> <span className="count">0</span>
          </a>
          <a  className="cart-icon" href="/cart">
            <RiShoppingBag3Fill /> <span className="count">0</span>
          </a>
        </div>
      </div>
      <hr />
      <div className="bottom-nav-container" id="bottom-nav">
        <ul className="menu-items">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#Products">Products</a>
          </li>
          <li>
            <a href="#Shop">Shop</a>
          </li>
          <li>
            <a href="#Deals">Deals</a>
          </li>
          <li>
          <a href="#Contact">Contact</a>
        </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
