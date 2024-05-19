import "../styles/cartDetail.scss";
export default function CartDetail() {
  return (
    <div id="cartDetail">
      <div className="cartDetailImgWrapper">
        <img src="/src/assets/intro4.jpg" alt="product" />
      </div>
      <div className="cartDetailWrapper">
        <div className="productInfo">
          <p>product name</p>
          <p>單價$100</p>
        </div>
        <div className="orderDetail">
          <p>數量:1</p>
          <div className="itemColor">
            <p>主色:原色</p>
            <p>輔色:原色</p>
          </div>
        </div>
        <p>$總價</p>
      </div>
    </div>
  );
}
