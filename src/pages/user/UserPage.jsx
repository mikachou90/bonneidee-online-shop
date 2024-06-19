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
import PopupModal from "../../components/PopupModal";
import { AlertSnackbar } from "../../components/Alert";

const UserPage = () => {
  const { user, isLoading } = useAuth0();
  const { data: userData } = useGetUser();
  const { data: orderData } = useGetOrders();
  const { data: favItemData } = useGetFavItem();
  const { data: productData } = useGetProducts();
  const [switchPage, setSwitchPage] = useState("orderList");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFav, setIsFav] = useState({
    isAddToFav: false,
    isRemoveFav: false,
  });

  function handleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const favItem = favItemData?.products.map((item) => {
    return productData?.find((product) => product._id === item);
  });

  if (isLoading) {
    return <LoadingOverlay />;
  }

  console.log("orderData", orderData);

  return (
    <div id="userPage">
      <AlertSnackbar
        message="已移除收藏清單"
        severity="success"
        open={isFav.isRemoveFav}
        setOpen={setIsFav}
      />
      {userData?.isAdmin && <h1>WELCOME</h1>}

      <div className="userGreeting">
        <h3>會員專區</h3>
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
              我的最愛
            </button>
          </li>
        </ul>
      </div>
      <div className="switchPageSection">
        {switchPage === "orderList" && (
          <section className="userOrderList">
            <h3>我的訂單</h3>
            <table className="userOderTable">
              <thead>
                <tr className="tableTittle">
                  <td>訂單編號</td>
                  <td>訂單狀態</td>
                  <td>付款方式</td>
                  <td>應付金額</td>
                  <td>帳款狀態</td>
                </tr>
              </thead>
              <tbody>
                {orderData?.map((order) => (
                  <OrderList
                    key={order._id}
                    order={order}
                    handleModal={handleModal}
                  />
                ))}
              </tbody>
            </table>
            {isModalOpen ? <PopupModal handleModal={handleModal} /> : null}
          </section>
        )}

        {switchPage === "favItemList" && (
          <section className="userFavItem">
            <h3>我的最愛</h3>
            <div className="favItem">
              {favItem?.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  setIsFav={setIsFav}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default UserPage;
