import "../styles/errorPage.scss";
import Lottie from "lottie-react";
import errorAnimation from "../assets/errorAnimation.json";
import { Link } from "react-router-dom";
import { FiTool } from "react-icons/fi";

export default function ErrorPage() {
  return (
    <div id="errorPage">
      <Lottie className="errorAnimation" animationData={errorAnimation} />
      <h1>Opps... Error Occured!</h1>
      <button className="errorBtn">
        <Link to="/">Try Again</Link>
      </button>
    </div>
  );
}

export function Error() {
  return (
    <div id="errorWrapper">
      <FiTool className="errorIcon" />
      <h6>Opps... Error Occured!</h6>
      <p>Please take it easy and come back few minutes later! </p>
    </div>
  );
}
