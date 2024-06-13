import "../styles/orderList.scss";

export default function OrderList({ order, handleModal }) {
  return (
    <tr>
      <td>
        <button type="button" onClick={handleModal}>
          {order._id}
        </button>
      </td>
      <td>{order.status === "pending" ? "確認中" : order.status}</td>
      <td>{order.paymentMethod} </td>
      <td>NTD100</td>
      <td>
        {order.paymentStatus === "unpaid" ? "尚未付款" : order.paymentStatus}
      </td>
    </tr>
  );
}
