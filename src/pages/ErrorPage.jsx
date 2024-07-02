import "../styles/errorPage.scss";
import Lottie from "lottie-react";
import errorAnimation from "../assets/errorAnimation.json";
import { Link } from "react-router-dom";

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
