import "../styles/loading.scss";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

export default function Loading() {
  return (
    <div className="loadingSection">
      <Lottie animationData={loadingAnimation} className="loadingAnimation" />
    </div>
  );
}
