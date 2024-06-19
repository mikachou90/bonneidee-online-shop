import { useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import OrderItem from "./OrderItem";
import { IoChevronBackOutline, IoClose } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import {
  useGetCart,
  useDeleteProductInCart,
  useUpdateCartItem,
} from "../queries/useCartData";
import RecommendItem from "./RecommendItem";
import { LoadingComponent } from "./Loading";
import { AlertSnackbar } from "./Alert";

export default function ShoppingCart() {
  const [currentStep, setCurrentStep, colorsData] = useOutletContext();
  const { data: cart, isLoading: cartIsLoading } = useGetCart();
  const { mutate: deleteCart, isSuccess: deleteSuccess } =
    useDeleteProductInCart();
  const { mutate: updateCart } = useUpdateCartItem();

  const [updateCartData, setUpdateCartData] = useState(cart);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  function handleClearItem(id) {
    if (id) {
      deleteCart(id);
      setMsg("已刪除商品");
      setOpen(true);
    } else {
      deleteCart();
      setMsg("已清空購物車 ");
      setOpen(true);
    }
  }

  function handleConfirmCart() {
    updateCart(updateCartData, {
      onSuccess: () => {
        setCurrentStep(2);
        navigate("/order-progress/order-form");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }
  console.log({ cart });
  console.log({ updateCartData });

  return cartIsLoading ? (
    <LoadingComponent loadingText="稍待片刻..." />
  ) : (
    <>
      <section id="shoppingCartPage">
        {deleteSuccess && (
          <AlertSnackbar
            message={msg}
            severity="success"
            open={open}
            setOpen={setOpen}
          />
        )}

        {cart?.products?.length > 0 && (
          <>
            <div className="shoppingCartWrapper">
              <button
                type="button"
                className="clearAllBtn"
                onClick={() => handleClearItem()}
              >
                <IoClose size={20} /> 清空購物車
              </button>
              {deleteCart.isLoading && (
                <LoadingComponent loadingText="清空中..." />
              )}

              <div className="displayOrderItems">
                {cart?.products
                  ? cart.products.map((data) => (
                      <OrderItem
                        key={data._id}
                        product={data}
                        cartIsLoading={cartIsLoading}
                        handleDeleteItem={() => handleClearItem(data._id)}
                        colorsData={colorsData}
                        cartData={cart}
                        setUpdateCartData={setUpdateCartData}
                        updateCartData={updateCartData}
                      />
                    ))
                  : null}
              </div>
              <div className="stepControlWrapper">
                <Link to="/products" className="backToProductPageBtn">
                  <IoChevronBackOutline size={20} />
                  繼續購物
                </Link>
                <button className="confirmOrderBtn" onClick={handleConfirmCart}>
                  填寫訂單
                </button>
              </div>
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
