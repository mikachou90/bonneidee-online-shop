import "../styles/emptyCart.scss";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import RecommendItem from "./RecommendItem";

export default function EmptyCart({ title }) {
  return (
    <div className="emptyCartWrapper">
      <h3>{title}</h3>
      <TiShoppingCart size={150} className="emptyCartIcon" />
      <div className="linkGroup">
        <Link to="/products">找尋商品</Link>
        <Link to="/">回首頁</Link>
      </div>
      <div className="recommendItemsWrapper">
        <h5>推薦商品</h5>
        <RecommendItem />
      </div>
    </div>
  );
}
