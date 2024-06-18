import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  useGetFavItem,
  useAddFavItem,
  useDeleteFavItem,
} from "../queries/useFavItemData";

const FavoriteButton = ({ productId, setIsFav }) => {
  const { data: favItemData, isLoading: favItemLoading } = useGetFavItem();
  const { mutate: addFavorite, isPending: addFavLoading } = useAddFavItem();
  const { mutate: deleteFavorite, isPending: deleteFavLoading } =
    useDeleteFavItem();

  const isLoading = favItemLoading || addFavLoading || deleteFavLoading;

  const isFavData = favItemData?.products?.includes(productId);

  function handleFavButton(id) {
    if (isLoading) return; // prevent multiple clicks
    if (!isFavData) {
      addFavorite(id);
      setIsFav({ isAddToFav: true, isRemoveFav: false });
    } else {
      deleteFavorite(id);
      setIsFav({ isAddToFav: false, isRemoveFav: true });
    }
  }

  return (
    <button
      type="button"
      className="favProductBtn"
      onClick={() => handleFavButton(productId)}
    >
      {!isFavData && <FaRegHeart size={20} />}
      {isFavData && <FaHeart id="filledHeart" size={20} />}
    </button>
  );
};

export default FavoriteButton;
