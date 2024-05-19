import "../styles/orderItem.scss";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

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
          {/* item info */}
          <div className="itemInfo">
            <p>Product Name</p>
            <p>單價$100</p>
          </div>

          {/* btns */}
          <div className="btnsWrapper">
            <div className="productColorWrapper">
              <p>主色</p>
              <select name="productColor" id="productColor">
                <option value="plain">原色</option>
                <option value="pink">粉色</option>
                <option value="lightPurple">粉紫</option>
                <option value="yellow">鵝黃</option>
                <option value="lightBlue">淺藍</option>
                <option value="lightGray">淺灰</option>
                <option value="purpleBlue">紫藍</option>
                <option value="caramel">焦糖</option>
                <option value="wasabi">芥末綠</option>
                <option value="lightGreen">淺綠</option>
              </select>
            </div>
            <div className="productColorWrapper">
              <p>主色</p>
              <select name="productColor" id="productColor">
                <option value="plain">原色</option>
                <option value="pink">粉色</option>
                <option value="lightPurple">粉紫</option>
                <option value="yellow">鵝黃</option>
                <option value="lightBlue">淺藍</option>
                <option value="lightGray">淺灰</option>
                <option value="purpleBlue">紫藍</option>
                <option value="caramel">焦糖</option>
                <option value="wasabi">芥末綠</option>
                <option value="lightGreen">淺綠</option>
              </select>
            </div>
            <div className="quantity">
              <p>數量</p>
              <div className="qtyBtn">
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

          {/* sum price */}
        </div>
        <p className="itemSumPrice">$總加總</p>
        <button type="button" className="deleteBtn">
          <IoClose size={25} />
        </button>
      </div>
    </div>
  );
}
