import "../styles/orderList.scss";
import { useState } from "react";
import { useGetOrder } from "../queries/useOrderData";
import { useGetColors } from "../queries/useProductData";

export default function OrderList({ order }) {
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const { data: orderData } = useGetOrder(order._id);
  const { data: colors } = useGetColors();

  const orderDate = order?.creationDate.slice(0, 10);

  function getColorsName(id) {
    const color = colors?.find((color) => color._id === id);
    return color?.name;
  }

  function handleShowOrderDetail() {
    setShowOrderDetail(!showOrderDetail);
  }

  const getSumPrice = () => {
    let totalPrice = 0;

    orderData?.cart.products.forEach((item) => {
      totalPrice += item.quantity * item.product?.price;
    });
    return totalPrice;
  };

  const deliveryFee = getSumPrice() >= 1000 ? 0 : 60;
  const sumPrice = getSumPrice();

  return (
    <div className="orderWrapper">
      <table className="userOderTable">
        <thead>
          <tr className="tableTittle">
            <td>訂單編號</td>
            <td>訂單狀態</td>
            <td>訂單日期</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order._id}</td>
            <td>{order.status === "pending" ? "確認中" : order.status}</td>
            <td>{orderDate}</td>
          </tr>
        </tbody>
      </table>
      <div className="showOrderDetail">
        <button type="button" onClick={handleShowOrderDetail}>
          查看明細 +
        </button>
        {showOrderDetail && (
          <div className="orderDetailsWrapper">
            <div className="itemDetail">
              <h5>商品明細</h5>
              {orderData?.cart?.products.map((product) => (
                <div className="item" key={product.product._id}>
                  <p>商品名: {product.product.name}</p>
                  {product.product.maxColors === 1 && (
                    <p>
                      主色:
                      {getColorsName(product.selectedColors[0])}
                    </p>
                  )}
                  {product.product.maxColors === 2 && (
                    <>
                      <p>
                        主色:
                        {getColorsName(product.selectedColors[0])}
                      </p>
                      <p>
                        輔色:
                        {getColorsName(product.selectedColors[1])}
                      </p>
                    </>
                  )}
                  <p>單價: ${product.product.price}</p>
                  <p>數量: {product.quantity}</p>
                </div>
              ))}
              <div className="sumPrice">
                <p>小計: ${sumPrice}</p>
                <p>
                  運費: ${deliveryFee} <span>(額滿1000元免運)</span>
                </p>

                <p className="payAmount">
                  應付金額:<span>{sumPrice + deliveryFee}</span>
                </p>
              </div>
            </div>
            <div className="orderDetail">
              <h5>訂單明細</h5>
              <div className="detail" key={orderData.order._id}>
                <div className="payment">
                  <h6>訂單金流</h6>
                  <p>付款狀態: {orderData.order.paymentStatus}</p>
                  <p>付款方式: {orderData.order.paymentMethod}</p>
                </div>
                <div className="shipping">
                  <h6>配送資訊</h6>
                  <p>收件人: {orderData.order.shippingName}</p>
                  <p>配送地址: {orderData.order.shippingAddress}</p>
                  <p>收件人電話: {orderData.order.shippingContactNumber}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
