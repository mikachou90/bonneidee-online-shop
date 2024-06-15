import "../styles/productCard.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useGetFavItem,
  useAddFavItem,
  useDeleteFavItem,
} from "../queries/useFavItemData";

export default function ProductCard({ product }) {
  const { data: favItemData } = useGetFavItem();
  const mutation = useAddFavItem();
  const deleteMutation = useDeleteFavItem();
  const isFav = favItemData?.products.includes(product._id);

  const handleAddFav = (id) => {
    if (!isFav) {
      mutation.mutate(id);
    } else {
      deleteMutation.mutate(id);
    }
    console.log("fav button clicked", id);
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
          <button type="button" onClick={() => handleAddFav(product._id)}>
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
