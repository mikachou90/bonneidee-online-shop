import "../styles/orderProgressPage.scss";
import Input from "../components/Input";
import CartDetail from "./CartDetail";
export default function OrderForm() {
  return (
    <>
      <section className="confirm">
        <div id="orderConfirm">
          <h3>訂單確認</h3>
          <CartDetail />
          <CartDetail />
          <div className="totalPrice">
            <h4>
              總金額 $<span>200</span>
            </h4>
          </div>
        </div>

        <div id="orderPayment">
          <h3>填寫訂購資訊</h3>
          <form action="">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <button type="button">送出訂單</button>
          </form>
        </div>
      </section>
    </>
  );
}
