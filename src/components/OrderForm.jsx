import "../styles/orderProgressPage.scss";
import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useGetCart } from "../queries/useCartData";
import { usePostOrder } from "../queries/useOrderData";
import { IoChevronBackOutline } from "react-icons/io5";
import Input, { InputTextArea } from "../components/Input";
import CartDetail from "./CartDetail";
import { AlertSnackbar } from "./Alert";

export default function OrderForm() {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "",
    note: "",
  });
  const [isInputAlertOpen, setIsInputAlertOpen] = useState(false);
  const [currentStep, setCurrentStep, colorsData] = useOutletContext();
  const { data: cart } = useGetCart();
  const { mutate: postOrderMutate, isSuccess: postOrderSuccess } =
    usePostOrder();
  const cartItems = cart?.products;

  const getSumPrice = () => {
    let totalPrice = 0;
    let deliveryFee = 60;
    cartItems?.forEach((product) => {
      totalPrice += product.quantity * product.product.price;
    });
    if (totalPrice >= 1000) {
      deliveryFee = 0;
    }
    return totalPrice + deliveryFee;
  };
  const sumPrice = getSumPrice();
  const isDeliveryFree = sumPrice >= 1000 ? "0" : "60";

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  }

  function handlePostOrder() {
    if (!input.name || !input.phone || !input.address || !input.payment) {
      setIsInputAlertOpen(true);
    }

    const fields = {
      cartId: cart._id,
      shippingAddress: input.address,
      shippingName: input.name,
      shippingContactNumber: input.phone,
      paymentMethod: input.payment,
    };

    postOrderMutate(fields, {
      onSuccess: () => {
        setCurrentStep(3);
      },
      onError: (error) => {
        console.log("error", error);
      },
    });
  }

  return (
    <>
      <AlertSnackbar
        message="請填寫完整資料"
        severity="error"
        open={isInputAlertOpen}
        setOpen={setIsInputAlertOpen}
      />
      {postOrderSuccess && (
        <AlertSnackbar
          message="請填寫完整資料"
          severity="error"
          open={isInputAlertOpen}
          setOpen={setIsInputAlertOpen}
        />
      )}
      <section id="confirm">
        <div id="orderConfirm">
          {currentStep === 2 && <h3>訂單確認</h3>}
          {currentStep >= 3 && <h3>訂單內容</h3>}
          {cartItems?.map((product) => (
            <CartDetail
              key={product._id}
              product={product}
              colorsData={colorsData}
            />
          ))}

          <div className="totalPrice">
            <p>運費 ${isDeliveryFree}</p>
            <p className="remarkText">(滿NTD1000免運費)</p>
            <h4>
              應付金額 $<span>{sumPrice}</span>
            </h4>
          </div>
        </div>

        {currentStep === 2 && (
          <div id="orderPayment">
            <h3>填寫訂購資訊</h3>
            <form action="submit">
              <Input
                id="name"
                labelText="收件人姓名"
                handleInputChange={handleInputChange}
                value={input.name}
                inputAlert={isInputAlertOpen}
              />
              <Input
                id="phone"
                labelText="收件人電話"
                handleInputChange={handleInputChange}
                value={input.phone}
                inputAlert={isInputAlertOpen}
              />
              <Input
                id="address"
                labelText="收件人地址"
                handleInputChange={handleInputChange}
                value={input.address}
                inputAlert={isInputAlertOpen}
              />

              <div className="paymenetSelectWrapper">
                <label htmlFor="payment" className="paymentLabel">
                  付款方式
                </label>
                <select
                  name="payment"
                  id="payment"
                  className={
                    isInputAlertOpen && !input.payment
                      ? "paymentSelect inputAlert"
                      : "paymentSelect"
                  }
                  onChange={handleInputChange}
                  required
                >
                  <option value="">請選擇付款方式</option>
                  <option value="creditCard">信用卡</option>
                  <option value="ATM">ATM</option>
                  <option value="store">超商代碼</option>
                  <option value="payAtDelivery">貨到付款</option>
                </select>
              </div>
              <InputTextArea
                id="note"
                labelText="備註"
                handleInputChange={handleInputChange}
              />

              <div className="btnsWrapper">
                <Link
                  to="/order-progress/shopping-cart"
                  onClick={() => setCurrentStep(1)}
                >
                  <IoChevronBackOutline size={20} />
                  修改訂單
                </Link>

                <button type="button" onClick={() => handlePostOrder()}>
                  送出訂單
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStep >= 3 && (
          <div id="submitFormConfirm">
            {currentStep === 3 && <h3>訂單建立完成</h3>}
            {currentStep === 4 && <h3>訂單付款完成</h3>}
            <div className="submitFormData">
              <p className="paymentStatus">
                訂單狀態: {currentStep === 3 && <span>未付款</span>}{" "}
                {currentStep === 4 && <span>已付款</span>}
              </p>

              <p>收件人姓名: {input.name}</p>
              <p>收件人電話: {input.phone}</p>
              <p>收件人地址: {input.address}</p>
              <p>收件人Email: {input.email}</p>
              <p>付款方式: {input.payment}</p>
            </div>
            {currentStep === 3 && (
              <button
                type="button"
                className="confirmPaymentBtn"
                onClick={() => setCurrentStep(4)}
              >
                確定付款
              </button>
            )}
            {currentStep === 4 && <Link to="/my-page">訂單查詢</Link>}
          </div>
        )}
      </section>
    </>
  );
}
