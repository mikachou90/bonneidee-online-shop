import "../styles/orderItem.scss";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useUpdateCartItem } from "../queries/useCartData";

export default function OrderItem({ product, handleDeleteItem, colorsData }) {
  const productData = product.product; // product id
  const quantity = product.quantity;
  const colorIds = product.selectedColors;
  const cartItemId = product._id; //product id in cart for seperating from same product

  // update cart item
  const { mutate: updateCart } = useUpdateCartItem();

  function handleQtyChange(action) {
    if (action === "minus") {
      if (quantity === 1) {
        return;
      } else {
        updateCart(
          {
            products: [
              {
                productId: productData._id,
                quantity: quantity - 1,
                colorIds,
                cartItemId,
              },
            ],
          },
          {
            onSuccess: () => {
              console.log("update success");
            },
            onError: (error) => {
              console.log(error);
            },
          }
        );
      }
    }

    if (action === "plus") {
      updateCart(
        {
          products: [
            {
              productId: productData._id,
              quantity: quantity + 1,
              colorIds,
              cartItemId,
            },
          ],
        },
        {
          onSuccess: () => {
            console.log("update success");
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
    }
  }

  // handle first color change
  function handle1stColorChange(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];

    updateCart(
      {
        products: [
          {
            productId: productData._id,
            quantity,
            colorIds: [selectedOption.id, colorIds[1]],
            cartItemId,
          },
        ],
      },
      {
        onSuccess: () => {
          console.log("update success");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  }

  // handle second color change
  function handle2ndColorChange(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];
    updateCart(
      {
        products: [
          {
            productId: productData._id,
            quantity,
            colorIds: [colorIds[0], selectedOption.id],
            cartItemId,
          },
        ],
      },
      {
        onSuccess: () => {
          console.log("update success");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  }

  return (
    <>
      {productData && (
        <div id="orderItem">
          <div className="imgWrapper">
            <img
              src={
                productData.picture ||
                "/src/assets/pictures/flowerKeychain1.jpg"
              }
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
                    <p>{quantity}</p>
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
              金額 <span>${productData.price * quantity}</span>
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
