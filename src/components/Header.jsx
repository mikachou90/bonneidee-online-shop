import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/header.scss";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import LoginButton from "./LoginButton";

export default function Header() {
  const { isAuthenticated } = useAuth0();
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
            <span className="cartQty">1</span>
          </Link>
        </div>
      </header>

      {/* over 1024px size */}
      <header id="mdSizeHeader">
        <div>
          <Link to="/">
            <img src="/src/assets/logo.png" alt="logo" className="mdLogo" />
          </Link>
          <div className="shoppingCart">
            <Link to="/order-progress">
              <FaCartShopping className="shoppingCartIcon" />
              <p>Cart</p>
              <span className="cartQty">1</span>
            </Link>
          </div>
        </div>
        <nav className="mdNav">
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <li>首頁</li>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <li>商品一覽</li>
            </NavLink>
            <NavLink
              to="/order-noti"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <li>訂購流程</li>
            </NavLink>

            {isAuthenticated && (
              <NavLink
                to="/my-page"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <li>會員專區</li>
              </NavLink>
            )}

            <LoginButton />
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
            {isAuthenticated && (
              <NavLink to="/my-page" onClick={handleMenuClick}>
                <li>會員專區</li>
              </NavLink>
            )}

            <NavLink to="/login" onClick={handleMenuClick}>
              <LoginButton />
            </NavLink>
          </ul>
        </div>
      ) : null}
    </>
  );
}
