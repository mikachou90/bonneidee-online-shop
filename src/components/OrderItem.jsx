import "../styles/orderItem.scss";

export default function OrderItem() {
  return (
    <div id="orderItem">
      <div className="imgWrapper">
        <img
          src="/src/assets/pictures/flowerKeychain1.jpg"
          alt="product picture"
        />
      </div>
      <div className="item"></div>
      <p className="totalPrice"></p>
    </div>
  );
}
