import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/header.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import LoginButton from "./LoginButton";
import { useGetCart } from "../queries/useCartData";
import { AlertSnackbar } from "./Alert";

export default function Header() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const navigate = useNavigate();

  const { data: cart = [] } = useGetCart();

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleShppingCartBtn() {
    if (!isAuthenticated) {
      setIsOpenAlert(true);
      loginWithRedirect({
        appState: {
          returnTo: "/",
        },
      });
      return;
    }
    navigate("/order-progress/shopping-cart");
  }

  return (
    <>
      <AlertSnackbar
        message="請先登入"
        severity="error"
        open={isOpenAlert}
        setOpen={setIsOpenAlert}
      />

      {/* sm size */}
      <header id="smSizeHeader">
        {!isMenuOpen && (
          <button className="menuBtn" onClick={handleMenuClick}>
            <RxHamburgerMenu size={20} color="white" />{" "}
          </button>
        )}

        {isMenuOpen && (
          <button className="menuBtn " onClick={handleMenuClick}>
            <IoCloseOutline className="closeIcon" size={20} color="white" />
          </button>
        )}
        <Link to="/">
          <img src="/public/logo.png" alt="logo" className="smLogo" />
        </Link>
        <div id="shoppingCart">
          <button className="cartBtn" onClick={handleShppingCartBtn}>
            <FaCartShopping className="shoppingCartIcon" />
            <p>Cart</p>
            <span className="cartQty">{cart.products?.length ?? 0}</span>
          </button>
        </div>
      </header>

      {/* over 768px size */}
      <header id="mdSizeHeader">
        <div>
          <Link to="/">
            <img src="/public/logo.png" alt="logo" className="mdLogo" />
          </Link>
          <div id="shoppingCart">
            <button className="cartBtn" onClick={handleShppingCartBtn}>
              <FaCartShopping className="shoppingCartIcon" />
              <p>Cart</p>
              <span className="cartQty">{cart.products?.length ?? 0}</span>
            </button>
          </div>
        </div>
        <nav className="mdNav">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "onPage" : undefined)}
              >
                首頁
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "onPage" : undefined)}
              >
                商品一覽
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/order-noti"
                className={({ isActive }) => (isActive ? "onPage" : undefined)}
              >
                常見問題
              </NavLink>
            </li>

            {isAuthenticated && (
              <li>
                <NavLink
                  to="/user-page"
                  className={({ isActive }) =>
                    isActive ? "onPage" : undefined
                  }
                >
                  會員專區
                </NavLink>
              </li>
            )}

            <LoginButton />
          </ul>
        </nav>
      </header>

      {/* toggle menu */}
      {isMenuOpen ? (
        <div id="toggleMenu" className={isMenuOpen && "toggleOn"}>
          <ul className="toggleUl">
            <li>
              <NavLink to="/" onClick={handleMenuClick}>
                首頁
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" onClick={handleMenuClick}>
                商品一覽
              </NavLink>
            </li>

            <li>
              <NavLink to="/order-noti" onClick={handleMenuClick}>
                常見問題
              </NavLink>
            </li>

            {isAuthenticated && (
              <li>
                <NavLink to="/user-page" onClick={handleMenuClick}>
                  會員專區
                </NavLink>
              </li>
            )}

            <li>
              <button onClick={handleMenuClick}>
                <LoginButton />
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
