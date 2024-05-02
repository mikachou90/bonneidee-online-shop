import "../styles/orderItem.scss";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

export default function OrderItem() {
  return (
    <div id="orderItem">
      <div className="imgWrapper">
        <img
          src="/src/assets/pictures/flowerKeychain1.jpg"
          alt="product picture"
        />
      </div>
      <div className="detail">
        <p>Product Name</p>
        <p>單價$100</p>
        <div className="quantity">
          <button className="decrease">
            <CiCircleMinus size={20} />
          </button>
          <p>1</p>
          <button className="increase">
            <CiCirclePlus size={20} />
          </button>
        </div>
      </div>
      <p className="sumPrice">$100</p>
    </div>
  );
}
