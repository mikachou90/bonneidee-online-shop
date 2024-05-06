import "../styles/mainPage.scss";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import IntroCard from "../components/IntroCard";

export default function MainPage() {
  return (
    <>
      <section id="bannerSection">
        <div className="bannerWrapper">
          <div className="bannerTittleWrapper">
            <h1>
              找尋生活中的好點子 <br />
              探索手工編織的美好
            </h1>
            <Link to="/products">探索更多</Link>
          </div>
        </div>
        <div>
          <a href="#"></a>
        </div>
      </section>
      <div id="mainPage">
        <section id="introSection">
          <h2>關於Bonne idée</h2>
          <div className="aboutShop left">
            <div className="aboutImg">
              <img src="/src/assets/intro4.jpg" alt="decor picture" />
            </div>
            <div className="aboutTextWrapper">
              <h3>好點子手作</h3>
              <div className="aboutText">
                <p>
                  我們的目標是透過手工編織，將美好的點子融入生活中，為每個角落帶來獨特的溫暖與風格。
                </p>
              </div>
            </div>
          </div>
          <div className="aboutShop right">
            <div className="aboutImg">
              <img src="/src/assets/intro3.jpg" alt="decor picture" />
            </div>
            <div className="aboutTextWrapper">
              <h3>童心玩趣</h3>
              <div className="aboutText">
                <p>
                  品牌名稱Bonne
                  idée來自法文「好點子」之意，發音類似「蹦泥地」，寓意著為您帶來裝飾靈感，就像是童年時頑皮地跳進雨天水泥坑般的快樂與無憂。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="aboutMacrame">
          <div className="">
            <div className="titleWrapper">
              <h2>About macrame</h2>
              <p>手工編織介紹</p>
            </div>
            <div className="introWrapper">
              <IntroCard className="icon" />
              <IntroCard className="icon" />
              <IntroCard className="icon" />
            </div>
          </div>
        </section>

        <section id="allProducts">
          <div className="titleWrapper">
            <h2>All Products</h2>
            <p>挖掘新上架的Bonne idee商品</p>
          </div>
          <div className="displayProduct">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <a href="#">更多商品</a>
        </section>
      </div>
    </>
  );
}
