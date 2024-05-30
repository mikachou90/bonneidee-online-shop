import { Link, useOutletContext } from "react-router-dom";
import OrderItem from "./OrderItem";
import { IoChevronBackOutline, IoClose } from "react-icons/io5";
import { useGetCart } from "../queries/useGetCart";

export default function ShoppingCart() {
  const [currentStep, setCurrentStep] = useOutletContext();
  console.log("step in step2", currentStep);

  const { data: cart } = useGetCart();

  return (
    <>
      <section id="shoppingCartPage">
        <div className="shoppingCartWrapper">
          <button type="button" className="clearAllBtn">
            <IoClose size={20} /> 清空購物車
          </button>
          <div className="displayOrderItems">
            {cart?.products
              ? cart.products.map((product) => (
                  <OrderItem key={product._id} product={product} />
                ))
              : null}
          </div>
        </div>

        <div className="stepControlWrapper">
          <Link to="/products" className="backToProductPageBtn">
            <IoChevronBackOutline size={20} />
            繼續購物
          </Link>
          <Link
            to="/order-progress/order-form"
            className="confirmOrderBtn"
            onClick={() => setCurrentStep(2)}
          >
            填寫訂單
          </Link>
        </div>
      </section>
    </>
  );
}
