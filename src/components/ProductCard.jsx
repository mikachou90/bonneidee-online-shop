import "../styles/productCard.scss";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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
          <button type="button" onClick={() => console.log("favBtn clicked!")}>
            <FaRegHeart size={20} />
          </button>
        </div>
      </div>
    </>
  ) : null;
}
