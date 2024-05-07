import "../../styles/userPage.scss";
import { useAuth0 } from "@auth0/auth0-react";
import useGetUser from "../../queries/useGetUser";
import ProductCard from "../../components/ProductCard";
import OrderList from "../../components/OrderList";

const UserPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { data: userData, isLoading: isUserLoading } = useGetUser();

  console.log({ userData, isUserLoading });
  console.log({ user });

  if (isLoading) {
    return <div>User Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <div>Not authenticated</div>;
  }

  return (
    <div id="userPage">
      <div className="userGreeting">
        <h3>Hello, {user.nickname}</h3>
      </div>
      <section className="userOrderList">
        <h3>我的訂單</h3>
        <div className="userOder">
          <OrderList />
        </div>
      </section>
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
    </div>
  );
};

export default UserPage;
