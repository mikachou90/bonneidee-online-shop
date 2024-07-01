import "../styles/productCard.scss";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";

export default function ProductCard({ product, setIsFav = () => {} }) {
  return product ? (
    <>
      <div className="productCardWrapper">
        <Link to={`/products/${product._id}`}>
          <div className="productImgWrapper">
            <img
              src={product.picture || "/src/assets/pictures/bottleHolder1.jpg"}
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
          <FavoriteButton setIsFav={setIsFav} productId={product._id} />
        </div>
      </div>
    </>
  ) : (
    <p>something missing...</p>
  );
}
