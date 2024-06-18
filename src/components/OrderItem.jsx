import "../styles/orderItem.scss";
import { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { LoadingComponent } from "./Loading";

export default function OrderItem({
  product,
  cartIsLoading,
  handleDeleteItem,
  colorsData,
}) {
  const productData = product.product;
  const qty = product.quantity;
  const selectedColors = product.selectedColors;
  const [itemQty, setItemQty] = useState(qty);

  function handleQtyChange(action) {
    if (action === "minus") {
      if (itemQty === 1) {
        // delete item
        return;
      } else {
        setItemQty(itemQty - 1);
      }
    }

    if (action === "plus") {
      setItemQty(itemQty + 1);
    }
  }

  const isLoading = cartIsLoading;

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <>
      {productData && (
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
                      {colorsData
                        ?.filter((color) => color._id === selectedColors[0])
                        .map((color) => (
                          <option key={color._id} value={color.name}>
                            {color.name}
                          </option>
                        ))}

                      {colorsData
                        ?.filter((color) => color._id !== selectedColors[0])
                        .map((color) => (
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
                        {colorsData
                          ?.filter((color) => color._id === selectedColors[0])
                          .map((color) => (
                            <option key={color._id} value={color.name}>
                              {color.name}
                            </option>
                          ))}

                        {colorsData
                          ?.filter((color) => color._id !== selectedColors[0])
                          .map((color) => (
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
                        {colorsData
                          ?.filter((color) => color._id === selectedColors[1])
                          .map((color) => (
                            <option key={color._id} value={color.name}>
                              {color.name}
                            </option>
                          ))}

                        {colorsData
                          ?.filter((color) => color._id !== selectedColors[1])
                          .map((color) => (
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
                      onClick={() => handleQtyChange("minus")}
                    >
                      <CiCircleMinus size={20} />
                    </button>
                    <p>{itemQty}</p>
                    <button
                      className="increase"
                      onClick={() => handleQtyChange("plus")}
                    >
                      <CiCirclePlus size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* sum price */}
            </div>
            <p className="itemSumPrice">$金額 {productData.price * itemQty}</p>
            <button
              type="button"
              className="deleteBtn"
              onClick={() => handleDeleteItem(productData._id)}
            >
              <IoClose id={productData._id} size={25} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
