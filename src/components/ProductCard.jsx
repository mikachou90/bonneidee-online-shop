import "../styles/productCard.scss";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ProductCard() {
  return (
    <>
      <Link to="/products/1" className="productCardWrapper">
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
          <div className="productIconWrapper">
            <button type="button">
              <FaRegHeart size={15} />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
