import { useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import OrderItem from "./OrderItem";
import { IoChevronBackOutline, IoClose } from "react-icons/io5";
import { useGetCart, useDeleteProductInCart } from "../queries/useCartData";
import { LoadingComponent } from "./Loading";
import { AlertSnackbar } from "./Alert";
import EmptyCart from "./EmptyCart";

export default function ShoppingCart() {
  const [, setCurrentStep, colorsData] = useOutletContext();
  const { data: cart } = useGetCart();
  const { mutate: deleteCart, isSuccess: deleteSuccess } =
    useDeleteProductInCart();

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
    setCurrentStep(2);
    navigate("/order-progress/order-form");
  }

  return (
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
                        handleDeleteItem={() => handleClearItem(data._id)}
                        colorsData={colorsData}
                        cartData={cart}
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
        {cart?.products?.length === 0 && <EmptyCart title="購物車尚無商品" />}
      </section>
    </>
  );
}
