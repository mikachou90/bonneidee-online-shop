import "../styles/loading.scss";
import Lottie from "lottie-react";
import loadingAnimationSm from "../assets/loadingAnimationSm.json";

export default function Loading({ loadingText = "" }) {
  return (
    <div className="loadingSection">
      <Lottie animationData={loadingAnimationSm} className="loadingAnimation" />
      {loadingText && <p className="loadingText">{loadingText}</p>}
    </div>
  );
}
