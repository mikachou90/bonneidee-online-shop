import "../styles/footer.scss";
import { FaInstagram } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
      <div className="logoWrapper">
        <img src="/src/assets/logo.png" alt="logo"></img>
        <p>好點子手作</p>
      </div>

      <div className="linkWrapper">
        <p>Find us!</p>
        <div className="link">
          <ul>
            <a href="#">
              <FaInstagram className="icon" />
            </a>
            <a href="#">
              <FaShoppingBasket className="icon" />
            </a>
            <a href="#">
              <IoMailOutline className="icon" />
            </a>
          </ul>
        </div>
        <div className="noti">
          <p>手作商品請耐心等候</p>
        </div>
      </div>
    </footer>
  );
}
