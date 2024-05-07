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

      <div className="cartItem">
        <div className="cartItemInfo">
          <div className="itemInfo">
            <p>Product Name</p>
            <p>單價$100</p>
          </div>
          <div className="itemSumPrice">
            <p>$100</p>
          </div>
        </div>
        <div className="quantity">
          <p>數量</p>
          <button className="decrease">
            <CiCircleMinus size={20} />
          </button>
          <p>1</p>
          <button className="increase">
            <CiCirclePlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
