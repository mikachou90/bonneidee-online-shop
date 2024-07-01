import "../styles/loading.scss";
import Lottie from "lottie-react";
import loadingAnimationSm from "../assets/loadingAnimationSm.json";

export function LoadingOverlay({ loadingText = "載入中..." }) {
  return (
    <div className="loading loadingOverlay">
      <Lottie animationData={loadingAnimationSm} className="loadingAnimation" />
      {loadingText && <p className="loadingText">{loadingText}</p>}
    </div>
  );
}

export function LoadingComponent({ loadingText = "" }) {
  return (
    <div className="loading loadingComponent">
      <Lottie animationData={loadingAnimationSm} className="loadingAnimation" />
      {loadingText && <p className="loadingText">{loadingText}</p>}
    </div>
  );
}
