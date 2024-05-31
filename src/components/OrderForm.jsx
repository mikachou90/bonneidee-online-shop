import "../styles/orderProgressPage.scss";
import { Link, useOutletContext } from "react-router-dom";
import { useGetCart } from "../queries/useGetCart";
import { IoChevronBackOutline } from "react-icons/io5";
import Input from "../components/Input";
import CartDetail from "./CartDetail";
export default function OrderForm() {
  const [currentStep, setCurrentStep] = useOutletContext();
  const { data: cart } = useGetCart();
  const productData = cart?.products;

  console.log({ currentStep });

  console.log({ cart });
  console.log({ productData });

  const getSumPrice = () => {
    let totalPrice = 0;
    productData?.forEach((product) => {
      totalPrice += product.quantity * product.product.price;
    });
    return totalPrice;
  };

  const sumPrice = getSumPrice();

  const isDeliveryFree = sumPrice >= 1000 ? "0" : "60";

  return (
    <>
      <section id="confirm">
        <div id="orderConfirm">
          {currentStep === 2 && <h3>訂單確認</h3>}
          {currentStep >= 3 && <h3>訂單清單</h3>}
          {productData?.map((product) => (
            <CartDetail key={product._id} product={product} />
          ))}

          <div className="totalPrice">
            <p>運費 ${isDeliveryFree}</p>
            <p className="remarkText">(滿NTD1000免運費)</p>
            <h4>
              總金額 $<span>{sumPrice}</span>
            </h4>
          </div>
        </div>

        {currentStep === 2 && (
          <div id="orderPayment">
            <h3>填寫訂購資訊</h3>
            <form action="submit">
              <Input labelText="收件人姓名" />
              <Input labelText="收件人電話" />
              <Input labelText="收件人地址" />
              <Input labelText="收件人Email" />
              <div className="paymenetSelectWrapper">
                <label htmlFor="payment" className="paymentLabel">
                  付款方式
                </label>
                <select name="payment" id="payment" className="paymentSelect">
                  <option value="信用卡">信用卡</option>
                  <option value="ATM">ATM</option>
                  <option value="超商代碼">超商代碼</option>
                  <option value="貨到付款">貨到付款</option>
                </select>
              </div>

              <div className="btnsWrapper">
                <Link
                  to="/order-progress/shopping-cart"
                  onClick={() => setCurrentStep(1)}
                >
                  <IoChevronBackOutline size={20} />
                  修改訂單
                </Link>

                <button type="button" onClick={() => setCurrentStep(3)}>
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
              <p>收件人姓名: xxx</p>
              <p>收件人電話: xxx</p>
              <p>收件人地址: xxx</p>
              <p>收件人Email: xxx</p>
              <p>付款方式: credit card</p>
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
