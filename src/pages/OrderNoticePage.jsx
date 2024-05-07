import "../styles/orderNoticePage.scss";
import { SlEnvolope } from "react-icons/sl";
import { TbPigMoney } from "react-icons/tb";
import { GiYarn } from "react-icons/gi";
import { FaHandsWash } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { Link } from "react-router-dom";

export default function OrderNoticePage() {
  return (
    <>
      <div id="orderNotiPage">
        <section className="notice">
          <h3>常見問題</h3>
          <div className="orderNoticeInfo">
            <div className="orderNotice">
              <SlEnvolope size={80} />
              <div>
                <p>
                  若對棉線顏色、材質有疑問，歡迎至Bonne idee
                  <Link to="https://www.instagram.com/craft_bonne_idee/">
                    IG
                  </Link>
                  聯絡。
                </p>
              </div>
            </div>
            <div className="orderNotice">
              <TbPigMoney size={80} />
              <div>
                <p>
                  本店只接受台灣地區的訂單，付款方式只限轉帳匯款，寄送方式可以選擇郵局/超商店到店。
                </p>
              </div>
            </div>
            <div className="orderNotice">
              <GiYarn size={80} />
              <div>
                <p>
                  收到款項後會依訂單順序製作，製作時間約1-7天不等。
                  <br />
                  若遇材料缺貨需多加7-14天。手工製作不接急單，敬請見諒。
                </p>
              </div>
            </div>
            <div className="orderNotice">
              <FaHandsWash size={80} />
              <div>
                <p>
                  若需清洗，請用中性洗劑及溫水手洗，不可浸泡。洗完後輕輕擠乾，不可機洗、烘乾。編織品若有毛球，可用剃毛器輕輕處理。
                </p>
              </div>
            </div>
            <div className="orderNotice">
              <MdOutlinePhoneCallback size={80} />
              <div>
                <p>
                  Bonne idee商品皆為接單手工製作，不提供退換貨，敬請見諒。
                  <br />
                  若遇商品嚴重瑕疵，請於收到商品後7天內聯絡，我們會盡快為您處理。
                  <br />
                  備註:僅接收五金斷裂或織品破洞等嚴重瑕疵，不接受因顏色等不符期待而退換貨。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
