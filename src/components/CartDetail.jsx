import "../styles/cartDetail.scss";
export default function CartDetail({ product, colorsData }) {
  const itemData = product?.product;
  const qty = product?.quantity;
  const selectedColors = product?.selectedColors;

  return (
    <div id="cartDetail">
      <div className="cartDetailImgWrapper">
        <img src={itemData.picture || "/no-image.png"} alt="product" />
      </div>
      <div className="cartDetailWrapper">
        <div className="productInfo">
          <p>{itemData.name}</p>
          <p>單價${itemData.price}</p>
          <div className="orderDetail">
            <p>數量:{qty}</p>
            <div className="itemColor">
              <p>
                主色:
                {
                  colorsData?.filter(
                    (color) => color._id === selectedColors[0]
                  )[0]?.name
                }
              </p>
              {itemData?.maxColors === 2 && (
                <p>
                  輔色:
                  {
                    colorsData?.filter(
                      (color) => color._id === selectedColors[1]
                    )[0]?.name
                  }
                </p>
              )}
            </div>
          </div>
        </div>

        <p>合計 ${qty * itemData.price}</p>
      </div>
    </div>
  );
}
