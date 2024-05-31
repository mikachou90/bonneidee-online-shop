import "../styles/productCard.scss";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavBtn = () => {
    setIsFav(!isFav);
  };

  return product ? (
    <>
      <div className="productCardWrapper">
        <Link to={`/products/${product._id}`}>
          <div className="productImgWrapper">
            <img
              src="/src/assets/pictures/bottleHolder1.jpg"
              alt="product photo"
            />
          </div>
          <div className="productInfoWrapper">
            <div className="productCategory">
              <p>{product.category.name}</p>
            </div>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
          </div>
        </Link>
        <div className="productIconWrapper">
          <button type="button" onClick={() => handleFavBtn()}>
            {!isFav && <FaRegHeart size={20} />}
            {isFav && <FaHeart id="filledHeart" size={20} />}
          </button>
        </div>
      </div>
    </>
  ) : (
    <p>something missing...</p>
  );
}
