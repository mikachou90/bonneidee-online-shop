import "../styles/cartDetail.scss";
export default function CartDetail({ product }) {
  const itemData = product?.product;

  console.log(itemData);
  return (
    <div id="cartDetail">
      <div className="cartDetailImgWrapper">
        <img src="/src/assets/intro4.jpg" alt="product" />
      </div>
      <div className="cartDetailWrapper">
        <div className="productInfo">
          <p>{itemData.name}</p>
          <p>單價${itemData.price}</p>
        </div>
        <div className="orderDetail">
          <p>數量:{product.quantity}</p>
          <div className="itemColor">
            <p>主色:原色</p>
            <p>輔色:原色</p>
          </div>
        </div>
        <p>合計 ${product.quantity * itemData.price}</p>
      </div>
    </div>
  );
}
