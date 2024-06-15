import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  useGetFavItem,
  useAddFavItem,
  useDeleteFavItem,
} from "../queries/useFavItemData";

const FavoriteButton = ({ productId }) => {
  const { data: favItemData, isLoading: favItemLoading } = useGetFavItem();
  const { mutate: addFavorite, isPending: addFavLoading } = useAddFavItem();
  const { mutate: deleteFavorite, isPending: deleteFavLoading } =
    useDeleteFavItem();

  const isLoading = favItemLoading || addFavLoading || deleteFavLoading;

  const isFav = favItemData?.products?.includes(productId);

  function handleFavButton(id) {
    if (isLoading) return; // prevent multiple clicks
    if (!isFav) {
      addFavorite(id);
    } else {
      deleteFavorite(id);
    }
  }

  return (
    <button
      type="button"
      className="favProductBtn"
      onClick={() => handleFavButton(productId)}
    >
      {!isFav && <FaRegHeart size={20} />}
      {isFav && <FaHeart id="filledHeart" size={20} />}
    </button>
  );
};

export default FavoriteButton;
