import "../../styles/userPage.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import useGetUser from "../../queries/useGetUser";
import { useGetOrders } from "../../queries/useOrderData";
import ProductCard from "../../components/ProductCard";
import OrderList from "../../components/OrderList";
import { LoadingOverlay } from "../../components/Loading";

const UserPage = () => {
  const { user, isLoading } = useAuth0();
  const { data: userData } = useGetUser();
  const { data: orderData } = useGetOrders();
  const [switchPage, setSwitchPage] = useState("orderList");

  console.log("orderData", orderData?.data);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <div id="userPage">
      {userData?.isAdmin && <h1>WELCOME ADMIN</h1>}

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
                <OrderList />
                <OrderList />
              </tbody>
            </table>
          </section>
        )}

        {switchPage === "favItemList" && (
          <section className="userFavItem">
            <h3>我的最愛</h3>
            <div className="favItem">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default UserPage;
