import { useState } from "react";
import "../styles/header.scss";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <>
      {/* sm size */}
      <header id="smSizeHeader">
        <button onClick={handleMenuClick}>
          <RxHamburgerMenu size={20} color="white" />
        </button>
        <Link to="/">
          <img src="/src/assets/logo.png" alt="logo" className="smLogo" />
        </Link>

        <div className="shoppingCart">
          <Link to="/order-progress">
            <FaCartShopping className="shoppingCartIcon" />
            <p>Cart</p>
          </Link>
        </div>
      </header>

      {/* over 1028px size */}
      <header id="mdSizeHeader">
        <div>
          <Link to="/">
            <img src="/src/assets/logo.png" alt="logo" className="mdLogo" />
          </Link>
          <div className="shoppingCart">
            <Link to="/order-progress">
              <FaCartShopping className="shoppingCartIcon" />
              <p>Cart</p>
            </Link>
          </div>
        </div>
        <nav className="mdNav">
          <ul>
            <a href="">
              <li>首頁</li>
            </a>
            <a href="">
              <li>商品一覽</li>
            </a>
            <a href="">
              <li>訂購流程</li>
            </a>
            <a href="">
              <li>登入/註冊</li>
            </a>
            <a href="">
              <li>我的訂單</li>
            </a>
          </ul>
        </nav>
      </header>

      {/* toggle menu */}
      {isMenuOpen ? (
        <div id="toggleMenu">
          <button className="closeButton" onClick={handleMenuClick}>
            <IoCloseOutline className="closeIcon" />
          </button>
          <ul className="toggleUl">
            <NavLink to="/" onClick={handleMenuClick}>
              <li>首頁</li>
            </NavLink>
            <NavLink to="/products" onClick={handleMenuClick}>
              <li>商品一覽</li>
            </NavLink>
            <NavLink to="/order-noti" onClick={handleMenuClick}>
              <li>訂購流程</li>
            </NavLink>
            <NavLink to="/login" onClick={handleMenuClick}>
              <li>登入/註冊</li>
            </NavLink>
            <NavLink to="/my-order" onClick={handleMenuClick}>
              <li>我的訂單</li>
            </NavLink>
          </ul>
        </div>
      ) : null}
    </>
  );
}
