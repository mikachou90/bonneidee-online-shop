import "../styles/productCard.scss";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ProductCard() {
  return (
    <>
      <div className="productCardWrapper">
        <Link to="/products/1">
          <div className="productImgWrapper">
            <img
              src="/src/assets/pictures/bottleHolder1.jpg"
              alt="product photo"
            />
          </div>
          <div className="productInfoWrapper">
            <div className="productCategory">
              <p>鑰匙圈</p>
            </div>
            <h4>商品名</h4>
            <p>$100</p>
          </div>
        </Link>
        <div className="productIconWrapper">
          <button type="button" onClick={() => console.log("favBtn clicked!")}>
            <FaRegHeart size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
