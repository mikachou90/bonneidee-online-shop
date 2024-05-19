import { Outlet } from "react-router-dom";
export default function OrderProgressPage() {
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
      <Outlet />
    </div>
  );
}
