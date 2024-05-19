import "../styles/orderProgressPage.scss";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import Input from "../components/Input";
import CartDetail from "./CartDetail";
export default function OrderForm() {
  return (
    <>
      <section id="confirm">
        <div id="orderConfirm">
          <h3>訂單確認</h3>
          <CartDetail />
          <CartDetail />
          <div className="totalPrice">
            <p>運費 $0</p>
            <p className="remarkText">(滿NTD1000免運費)</p>
            <h4>
              總金額 $<span>200</span>
            </h4>
          </div>
        </div>

        <div id="orderPayment">
          <h3>填寫訂購資訊</h3>
          <form action="">
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
              <Link to="/order-progress/shopping-cart">
                <IoChevronBackOutline size={20} />
                修改訂單
              </Link>
              <button type="button">送出訂單</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
