import "../styles/mainPage.scss";
import ProductCard from "../components/ProductCard";
import IntroCard from "../components/IntroCard";
export default function MainPage() {
  return (
    <>
      <section id="bannerSection">
        <div className="bannerWrapper">
          <div className="textWrapper">
            <p>找尋生活中的好點子</p>
            <br />
            <p>探索手工編織的美好</p>
          </div>
        </div>
        <div>
          <a href="#"></a>
        </div>
      </section>

      <section id="introSection">
        <div className="aboutShop">
          <div className="aboutImg">
            <img src="/src/assets/intro4.jpg" alt="decor picture" />
          </div>
          <div className="contentWrapper">
            <h2>
              Bonne idée
              <br />
              好點子手作
            </h2>
            <div className="introTextWrapper">
              <p>
                Bonne
                Idée是一個手工編織品牌，我們的目標是透過手工編織，將美好的點子融入生活中，為每個角落帶來獨特的溫暖與風格。
                <br />
                <br />
                品牌名稱Bonne
                idée來自法文「好點子」之意，發音類似「蹦泥地」，寓意著為您帶來裝飾靈感，就像是童年時頑皮地跳進雨天水泥坑般的快樂與無憂。
              </p>
            </div>
          </div>
        </div>

        <div className="aboutMacrame">
          <div className="titleWrapper">
            <h2>About macrame</h2>
            <p>手工編織介紹</p>
          </div>
          <div className="introWrapper">
            <IntroCard />
            <IntroCard />
            <IntroCard />
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
        </div>
        <a href="#">更多商品</a>
      </section>
    </>
  );
}
