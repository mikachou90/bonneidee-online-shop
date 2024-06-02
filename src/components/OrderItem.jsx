import "../styles/orderItem.scss";
import { useState } from "react";
import { useGetColorsData } from "../queries/useColorData";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function OrderItem({ product }) {
  const productData = product.product;
  const qty = product.quantity;
  const [itemQty, setItemQty] = useState(qty);

  const { data: colorsData } = useGetColorsData();

  console.log("colorsData", colorsData);
  console.log("productData", productData);
  console.log("itemQty", itemQty);

  function handleQtyChange(action) {
    if (action === "decrease") {
      if (itemQty === 1) return;
      setItemQty(itemQty - 1);
    } else if (action === "increase") {
      setItemQty(itemQty + 1);
    }
  }

  return (
    <>
      {productData ? (
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
                <p>{productData.name}</p>
                <p>單價${productData.price}</p>
              </div>

              {/* btns */}
              <div className="btnsWrapper">
                {productData?.maxColors === 1 && (
                  <div className="productColorWrapper">
                    <p>主色</p>
                    <select name="productColor" id="productColor">
                      {colorsData?.map((color) => (
                        <option key={color._id} value={color.name}>
                          {color.name}
                        </option>
                      ))}
                      <option value="plain">原色</option>
                    </select>
                  </div>
                )}
                {productData?.maxColors === 2 && (
                  <div>
                    <div className="productColorWrapper">
                      <p>主色</p>
                      <select name="productColor" id="productColor">
                        {colorsData?.map((color) => (
                          <option key={color._id} value={color.name}>
                            {color.name}
                          </option>
                        ))}
                        <option value="plain">原色</option>
                      </select>
                    </div>
                    <div className="productColorWrapper">
                      <p>輔色</p>
                      <select name="productColor" id="productColor">
                        {colorsData?.map((color) => (
                          <option key={color._id} value={color.name}>
                            {color.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div className="quantity">
                  <p>數量</p>
                  <div className="qtyBtn">
                    <button
                      className="decrease"
                      onClick={() => handleQtyChange("decrease")}
                    >
                      <CiCircleMinus size={20} />
                    </button>
                    <p>{itemQty}</p>
                    <button
                      className="increase"
                      onClick={() => handleQtyChange("increase")}
                    >
                      <CiCirclePlus size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* sum price */}
            </div>
            <p className="itemSumPrice">$金額 {productData.price * itemQty}</p>
            <button type="button" className="deleteBtn">
              <IoClose size={25} />
            </button>
          </div>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
}
