import "../styles/orderProgress.scss";
import OrderConfirm from "../components/OrderConfirm";
import Input from "../components/Input";

export default function OrderProgress() {
  return (
    <div id="orderProgressPage">
      <div className="progressBar">
        <div className="step1">
          <p>STEP 1</p>
          <p>訂單確認</p>
        </div>
        <div className="step2">
          <p>STEP 2</p>
          <p>建立訂單</p>
        </div>
        <div className="step3">
          <p>STEP 3</p>
          <p>完成訂單</p>
        </div>
      </div>

      <div id="orderConfirm">
        <h3>訂單確認</h3>
        <OrderConfirm />
        <OrderConfirm />
      </div>

      <form id="orderPayment" action="">
        <Input />
        <Input />
        <Input />
      </form>
    </div>
  );
}
