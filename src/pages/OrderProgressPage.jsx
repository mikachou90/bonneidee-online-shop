import "../styles/orderProgressPage.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useGetColorsData } from "../queries/useColorData";

export default function OrderProgressPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { data: colorsData } = useGetColorsData();

  return (
    <div id="orderProgressPage">
      <div className="progressBar">
        <div className="active">
          <p>STEP 1</p>
          <p>購物車清單</p>
        </div>
        <div className={currentStep >= 2 ? "active" : ""}>
          <p>STEP 2</p>
          <p>填寫訂單</p>
        </div>
        <div className={currentStep >= 3 ? "active" : ""}>
          <p>STEP 3</p>
          <p>訂單建立完成</p>
        </div>
        <div className={currentStep >= 4 ? "active" : ""}>
          <p>STEP 4</p>
          <p>付款完成</p>
        </div>
      </div>
      <div className="displayComponents">
        <Outlet context={[currentStep, setCurrentStep, colorsData]} />
      </div>
    </div>
  );
}
