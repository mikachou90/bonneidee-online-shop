import "../styles/productDetailPage.scss";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

export default function ProductDetailPage() {
  return (
    <div id="productDetail">
      <section id="detailSection">
        <div className="productCard">
          <div className="detailImgWrapper">
            <img
              src="/src/assets/pictures/bottleHolder1.jpg"
              alt="product picture"
            />
          </div>
          <div className="contentWrapper">
            <h2>商品名</h2>
            <h3>$100</h3>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                ratione, vel earum iste atque ullam quod numquam molestiae cum.
                Unde!
              </p>
            </div>
            <div className="addToCart">
              <div className="qty">
                <button type="button">
                  <CiCircleMinus className="icon" />
                </button>
                <p>1</p>
                <button type="button">
                  <CiCirclePlus className="icon" />
                </button>
              </div>
              <button type="button" className="add">
                加入購物車
              </button>
            </div>
          </div>
        </div>
        <div className="productNoti">
          <h3>注意事項</h3>
          <div className="content">
            <ul>
              <li>使用的棉線為天然棉花製成，線條上有咖啡色小點為棉花殼。</li>
              <li>棉線織品易潮濕，建議保持乾燥。</li>
              <li>
                基本上棉線織品不建議水洗，若需要可用中性洗劑以冷水或溫水輕揉清潔（不宜久泡），平鋪陰乾即可。切勿使用熱水，天然棉線會有熱縮情況。另深色線材可能會染色，請知悉。
              </li>
              <li>若必要可使用酒精噴灑消毒，但噴灑過量也可能造成染色。</li>
              <li>平常可使用吸塵器除塵。</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="recommendCards">
        <h3>推薦商品</h3>
        <div className="swiperWrapper">swiper product card</div>
      </section>
    </div>
  );
}
