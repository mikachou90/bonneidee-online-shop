import { Link } from "react-router-dom";
import OrderItem from "./OrderItem";
import { IoChevronBackOutline } from "react-icons/io5";

export default function ShoppingCart() {
  return (
    <>
      <section id="shoppingCartPage">
        <div className="shoppingCartWrapper">
          <button type="button" className="clearAllBtn">
            X 清空購物車
          </button>
          <div className="displayOrderItems">
            <OrderItem />
            <OrderItem />
          </div>
        </div>

        <div className="stepControlWrapper">
          <Link to="/products" className="backToProductPageBtn">
            <IoChevronBackOutline size={20} />
            繼續購物
          </Link>
          <Link to="/order-progress/order-form" className="confirmOrderBtn">
            確認訂單
          </Link>
        </div>
      </section>
    </>
  );
}
