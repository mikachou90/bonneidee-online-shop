import "../styles/footer.scss";
import { Link } from "react-router-dom";
import { FaInstagram, FaShoppingBasket } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
      <div className="links">
        <p>Contact us!</p>
        <ul>
          <li>
            <Link
              target="_blank"
              to="https://www.instagram.com/craft_bonne_idee/"
            >
              <FaInstagram className="icon" />
            </Link>
          </li>
          <li>
            <Link target="_blank" to="/">
              <FaShoppingBasket className="icon" />
            </Link>
          </li>
          <li>
            <Link to="mailto:bonneidee90.tw@gmail.com">
              <IoMailOutline className="icon" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="authContent">
        {/* <p>ⓒ 2024 Bonne idee by Mika Chou</p> */}
        <p>此為個人作品集網站，非商業用途</p>
      </div>
    </footer>
  );
}
