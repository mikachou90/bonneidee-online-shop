import "../styles/productCard.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
export default function ProductCard() {
  return (
    <>
      <div className="productCardWrapper">
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
              <FaShoppingCart size={15} />
            </button>

            <button type="button">
              <FaRegHeart size={15} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
