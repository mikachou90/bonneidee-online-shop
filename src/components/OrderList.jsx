import "../styles/orderList.scss";

export default function OrderList({ order }) {
  return (
    <tr>
      <td>
        <button type="button">{order._id}</button>
      </td>
      <td>{order.status === "pending" ? "確認中" : order.status}</td>
      <td>
        {(order.paymentMethod === "store" && "超商付款") ||
          (order.paymentMethod === "creditCard" && "信用卡") ||
          (order.paymentMethod === "payAtDelivery" && "貨到付款") ||
          (order.paymentMethod === "ATM" && order.paymentMethod)}
      </td>
      <td>NTD100</td>
    </tr>
  );
}
