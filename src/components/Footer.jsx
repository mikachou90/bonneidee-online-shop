import "../styles/footer.scss";
import { FaInstagram, FaShoppingBasket } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
      <div className="links">
        <p>Contact us!</p>
        <ul>
          <a href="https://www.instagram.com/craft_bonne_idee/">
            <FaInstagram className="icon" />
          </a>
          <a href="/">
            <FaShoppingBasket className="icon" />
          </a>
          <a href="#">
            <IoMailOutline className="icon" />
          </a>
        </ul>
      </div>

      <div className="authContent">
        {/* <p>ⓒ 2024 Bonne idee by Mika Chou</p> */}
        <p>此為個人作品集網站，非商業用途</p>
      </div>
    </footer>
  );
}
