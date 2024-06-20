import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  useGetFavItem,
  useAddFavItem,
  useDeleteFavItem,
} from "../queries/useFavItemData";
import { AlertSnackbar } from "./Alert";

const FavoriteButton = ({ productId, setIsFav }) => {
  const { data: favItemData, isLoading: favItemLoading } = useGetFavItem();
  const { mutate: addFavorite, isPending: addFavLoading } = useAddFavItem();
  const { mutate: deleteFavorite, isPending: deleteFavLoading } =
    useDeleteFavItem();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const isLoading = favItemLoading || addFavLoading || deleteFavLoading;

  const isFavData = favItemData?.products?.includes(productId);

  function handleFavButton(id) {
    if (!isAuthenticated) {
      setIsAlertOpen(true);
      loginWithRedirect({
        appState: {
          returnTo: "/",
        },
      });
    }

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
    <>
      <AlertSnackbar
        message="請先登入"
        severity="error"
        open={isAlertOpen}
        setOpen={setIsAlertOpen}
      />

      <button
        type="button"
        className="favProductBtn"
        onClick={() => handleFavButton(productId)}
      >
        {!isFavData && <FaRegHeart size={20} />}
        {isFavData && <FaHeart id="filledHeart" size={20} />}
      </button>
    </>
  );
};

export default FavoriteButton;
