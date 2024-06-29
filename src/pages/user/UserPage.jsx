import "../../styles/userPage.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import useGetUser from "../../queries/useGetUser";
import { useGetOrders } from "../../queries/useOrderData";
import { useGetFavItem } from "../../queries/useFavItemData";
import { useGetProducts } from "../../queries/useProductData";
import ProductCard from "../../components/ProductCard";
import OrderList from "../../components/OrderList";
import { LoadingOverlay } from "../../components/Loading";
// import PopupModal from "../../components/PopupModal";
import { AlertSnackbar } from "../../components/Alert";
import { FaBoxOpen } from "react-icons/fa";

const UserPage = () => {
  const { user, isLoading } = useAuth0();
  const { data: userData } = useGetUser();
  const { data: orderData } = useGetOrders();
  const { data: favItemData } = useGetFavItem();
  const { data: productData } = useGetProducts();
  const [switchPage, setSwitchPage] = useState("orderList");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFav, setIsFav] = useState({
    isAddToFav: false,
    isRemoveFav: false,
  });

  // function handleModal() {
  //   setIsModalOpen(!isModalOpen);
  // }

  const favItem = favItemData?.products.map((item) => {
    return productData?.find((product) => product._id === item);
  });

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <AlertSnackbar
        message="已移除收藏清單"
        severity="success"
        open={isFav.isRemoveFav}
        setOpen={setIsFav}
      />
      {userData && (
        <div id="userPage">
          {/* {isModalOpen ? <PopupModal handleModal={handleModal} /> : null} */}
          <h1>會員專區</h1>
          <div className="userInfoWrapper">
            <div className="userImageWrapper">
              <img src={user.picture} alt="userImage" />
            </div>

            <h3>Hello, {user.nickname}</h3>
          </div>
          <div className="switchPageBtn">
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSwitchPage("orderList");
                  }}
                  className={switchPage === "orderList" ? "active" : ""}
                >
                  訂單查詢
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSwitchPage("favItemList");
                  }}
                  className={switchPage === "favItemList" ? "active" : ""}
                >
                  收藏清單
                </button>
              </li>
            </ul>
          </div>
          <div className="switchPageSection">
            {/* order list */}
            {switchPage === "orderList" && (
              <section className="userOrderList">
                <h3>我的訂單</h3>
                {orderData?.map((order) => (
                  <OrderList key={order._id} order={order} />
                ))}
              </section>
            )}

            {/* fav item list */}
            {switchPage === "favItemList" && (
              <section className="userFavItem">
                {favItem.length > 0 && <h3>收藏清單</h3>}
                <div className="favItem">
                  {favItem?.map((product) => (
                    <ProductCard
                      key={product?._id}
                      product={product}
                      setIsFav={setIsFav}
                    />
                  ))}
                  {favItem?.length === 0 && (
                    <div className="noFavItem">
                      <h2>尚無收藏商品</h2>
                      <FaBoxOpen size={150} />
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      )}
      {!userData && <div>請先登入</div>}
    </>
  );
};

export default UserPage;
