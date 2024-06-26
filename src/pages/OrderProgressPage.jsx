import "../styles/orderProgressPage.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useGetColorsData } from "../queries/useColorData";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
  // PiNumberCircleFourLight,
  PiCheckCircleFill,
} from "react-icons/pi";

export default function OrderProgressPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { data: colorsData } = useGetColorsData();

  return (
    <div id="orderProgressPage">
      <div className="progressBar">
        <div className="step active">
          {currentStep === 1 && (
            <PiNumberCircleOneLight className="stepIcon active" />
          )}
          {currentStep >= 2 && (
            <PiCheckCircleFill className="stepIcon active" />
          )}
          <p>購物車確認</p>
        </div>

        <div className="stepBarWrapper">
          <span className={currentStep >= 2 ? "nextActive" : ""}></span>
        </div>

        <div className={currentStep >= 2 ? "step active" : "step"}>
          {currentStep <= 2 && (
            <PiNumberCircleTwoLight
              className={currentStep === 2 ? "active stepIcon" : "stepIcon"}
            />
          )}
          {currentStep >= 3 && (
            <PiCheckCircleFill className="stepIcon active" />
          )}
          <p>填寫訂單</p>
        </div>

        <div className="stepBarWrapper">
          <span className={currentStep >= 3 ? "nextActive" : ""}></span>
        </div>
        <div className={currentStep >= 3 ? "step active" : "step"}>
          {currentStep < 3 && (
            <PiNumberCircleThreeLight
              className={currentStep === 3 ? "active stepIcon" : "stepIcon"}
            />
          )}
          {currentStep >= 3 && (
            <PiCheckCircleFill className="stepIcon active" />
          )}
          <p>訂單完成</p>
        </div>
        {/* <div className={currentStep >= 4 ? "active" : ""}>
          {currentStep === 4 && (
            <PiCheckCircleFill className="stepIcon active" />
          )}
          {currentStep < 4 && <PiNumberCircleFourLight className="stepIcon" />}
          <p>付款完成</p>
        </div> */}
      </div>
      <div className="displayComponents">
        <Outlet context={[currentStep, setCurrentStep, colorsData]} />
      </div>
    </div>
  );
}
