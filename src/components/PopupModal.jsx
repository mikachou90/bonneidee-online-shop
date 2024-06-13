import "../styles/popupModal.scss";

export default function PopupModal({ handleModal }) {
  return (
    <div id="modal">
      <button className="closeModal" onClick={handleModal}>
        X
      </button>
      <div className="orderListWrapper">
        <div className="content ">
          <h5>訂單編號</h5>
          <p>123456789</p>
        </div>
        <div className="content">
          <h5>訂單狀態</h5>
          <p>已完成</p>
        </div>
        <div className="content">
          <h5>付款方式</h5>
          <p>信用卡</p>
        </div>
        <div className="deliveryInfo">
          <h5>郵寄資訊</h5>
          <p>
            收件人: <span>Mika</span>
          </p>
          <p>
            地址: <span>台北市信義區</span>
          </p>
          <p>
            連絡電話: <span>0912345678</span>
          </p>
        </div>
        <div className="orderDetail">
          <h5>訂單內容</h5>
          <table>
            <thead>
              <tr>
                <td>商品名</td>
                <td>單價</td>
                <td>數量</td>
                <td>應付金額</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>鑰匙圈</td>
                <td>NTD100</td>
                <td>1</td>
                <td>NTD100</td>
              </tr>
              <tr>
                <td>鑰匙圈</td>
                <td>NTD100</td>
                <td>1</td>
                <td>NTD100</td>
              </tr>
              <tr>
                <td>鑰匙圈</td>
                <td>NTD100</td>
                <td>1</td>
                <td>NTD100</td>
              </tr>
              <tr>
                <td>鑰匙圈</td>
                <td>NTD100</td>
                <td>1</td>
                <td>NTD100</td>
              </tr>
            </tbody>
          </table>
          <h5>
            郵資: <span>NTD$60</span>
          </h5>
          <h5>
            總金額: <span>NTD$100</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
