import "../styles/allProductPage.scss";
import ProductCard from "../components/ProductCard";
export default function AllProductPage() {
  return (
    <>
      <div className="decorBar">
        <h1>All Products</h1>
      </div>
      <div id="allProductPage">
        <section className="leftSeciton">
          <h1>商品分類</h1>
          <div className="sideMenu">
            <button type="button">鑰匙圈</button>
            <button type="button">包包</button>
            <button type="button">奶嘴夾</button>
            <button type="button">裝飾</button>
          </div>
        </section>

        <section className="rightSection">
          <div className="allProducts">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>
    </>
  );
}
