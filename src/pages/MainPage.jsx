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
