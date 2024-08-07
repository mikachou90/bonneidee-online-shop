import "../styles/productCard.scss";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
import { Error } from "../pages/ErrorPage";
import Skeleton from "@mui/material/Skeleton";

export default function ProductCard({
  product,
  setIsFav = () => {},
  isLoading = false,
  isError = false,
}) {
  if (isLoading) {
    return <Skeleton variant="rectangular" width="15rem" height="22rem" />;
  }

  if (isError) {
    return <Error />;
  }

  return product ? (
    <>
      <div className="productCardWrapper">
        <Link to={`/products/${product._id}`}>
          <div className="productImgWrapper">
            <img src={product.picture || "/no-image.png"} alt="product photo" />
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
    <Error />
  );
}
