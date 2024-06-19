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
  setUpdateCartData,
  cartData,
}) {
  const productData = product.product; // product id
  const quantity = product.quantity;
  const colorIds = product.selectedColors;
  const cartItemId = product._id; //product id in cart for seperating from same product
  const [updateQty, setUpdateQty] = useState(quantity);

  function handleQtyChange(action) {
    if (action === "minus") {
      if (updateQty === 1) {
        return;
      } else {
        setUpdateQty(updateQty - 1);
        setUpdateCartData(() => {
          const newCart = cartData.products?.map((product) => {
            if (product._id === cartItemId) {
              product.quantity = updateQty - 1;
            }
            return product;
          });
          return { products: newCart };
        });
      }
    }

    if (action === "plus") {
      setUpdateQty(updateQty + 1);
      setUpdateCartData(() => {
        const newCart = cartData.products?.map((product) => {
          if (product._id === cartItemId) {
            product.quantity = updateQty + 1;
          }
          return product;
        });
        return { products: newCart };
      });
    }
  }

  const isLoading = cartIsLoading;

  function handle1stColorChange(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];
    console.log("color id", selectedOption.id);

    setUpdateCartData(() => {
      const newCart = cartData.products?.map((product) => {
        if (product._id === cartItemId) {
          product.colorIds = product.colorIds || [];
          product.colorIds[0] = selectedOption.id;
        }
        return product;
      });
      return { products: newCart };
    });
  }

  function handle2ndColorChange(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setUpdateCartData(() => {
      const newCart = cartData?.products.map((product) => {
        if (product._id === cartItemId) {
          product.colorIds = product.colorIds || [];
          product.colorIds[1] = selectedOption.id;
        }
        return product;
      });
      return { products: newCart };
    });
  }

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
                <p>
                  單價 <span>$ {productData.price}</span>
                </p>
              </div>

              {/* btns */}
              <div className="btnsWrapper">
                {productData?.maxColors === 1 && (
                  <div className="productColorWrapper">
                    <p>主色</p>
                    <select
                      name="productColor"
                      id="productColor"
                      onChange={handle1stColorChange}
                    >
                      {/* filter out the selected color */}
                      {colorsData
                        ?.filter((color) => color._id === colorIds[0])
                        .map((color) => (
                          <option
                            key={color._id}
                            value={color.name}
                            id={color._id}
                          >
                            {color.name}
                          </option>
                        ))}

                      {/* filter out the unselected color */}
                      {colorsData
                        ?.filter((color) => color._id !== colorIds[0])
                        .map((color) => (
                          <option
                            key={color._id}
                            value={color.name}
                            id={color._id}
                          >
                            {color.name}
                          </option>
                        ))}
                    </select>
                  </div>
                )}
                {productData?.maxColors === 2 && (
                  <div>
                    <div className="productColorWrapper">
                      <p>主色</p>
                      <select
                        name="productColor"
                        id="productColor"
                        onChange={handle1stColorChange}
                      >
                        {/*  filter out the selected color */}
                        {colorsData
                          ?.filter((color) => color._id === colorIds[0])
                          .map((color) => (
                            <option
                              key={color._id}
                              value={color.name}
                              id={color._id}
                            >
                              {color.name}
                            </option>
                          ))}

                        {/* filter out the unselected color */}
                        {colorsData
                          ?.filter((color) => color._id !== colorIds[0])
                          .map((color) => (
                            <option
                              key={color._id}
                              value={color.name}
                              id={color._id}
                            >
                              {color.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="productColorWrapper">
                      <p>輔色</p>
                      <select
                        name="productColor"
                        id="productColor"
                        onChange={handle2ndColorChange}
                      >
                        {/*  filter out the selected color */}
                        {colorsData
                          ?.filter((color) => color._id === colorIds[1])
                          .map((color) => (
                            <option
                              key={color._id}
                              value={color.name}
                              id={color._id}
                            >
                              {color.name}
                            </option>
                          ))}

                        {/* filter out the unselected color */}
                        {colorsData
                          ?.filter((color) => color._id !== colorIds[1])
                          .map((color) => (
                            <option
                              key={color._id}
                              value={color.name}
                              id={color._id}
                            >
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
                    <p>{updateQty}</p>
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
            <p className="itemSumPrice">
              金額 <span>${productData.price * updateQty}</span>
            </p>
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
