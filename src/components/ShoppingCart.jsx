import { Link, useOutletContext } from "react-router-dom";
import OrderItem from "./OrderItem";
import { IoChevronBackOutline, IoClose } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { useGetCart, useDeleteFullCart } from "../queries/useCartData";
import RecommendItem from "./RecommendItem";

export default function ShoppingCart() {
  const [currentStep, setCurrentStep] = useOutletContext();
  const { data: cart, isLoading: cartIsLoading } = useGetCart();
  const mutate = useDeleteFullCart();

  console.log("currentStep in step 1", currentStep);
  console.log("cart data", cart);

  function handleClearAll() {
    mutate.mutate();
  }
  return cartIsLoading ? (
    <div>Loading ...</div>
  ) : (
    <>
      <section id="shoppingCartPage">
        {cart?.products?.length > 0 && (
          <>
            <div className="shoppingCartWrapper">
              <button
                type="button"
                className="clearAllBtn"
                onClick={handleClearAll}
              >
                <IoClose size={20} /> 清空購物車
              </button>
              {mutate.isLoading && <h3>清空中...</h3>}

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
          </>
        )}
        {cart?.products?.length === 0 && (
          <div className="emptyCartWrapper">
            <h3>購物車中無任何商品</h3>
            <LuShoppingCart size={150} className="emptyCartIcon" />
            <div className="linkGroup">
              <Link to="/products">找尋商品</Link>
              <Link to="/">回首頁</Link>
            </div>
            <div className="recommendItemsWrapper">
              <h5>推薦商品</h5>
              <RecommendItem />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
