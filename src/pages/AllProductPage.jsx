import "../styles/allProductPage.scss";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
export default function AllProductPage() {
  const [productTitle, setProductTitle] = useState("全部商品");
  return (
    <>
      <div id="allProductPage">
        <section className="leftSeciton">
          <h1>商品分類</h1>
          <div className="sideMenu">
            <button type="button" onClick={() => setProductTitle("全部商品")}>
              全部
            </button>
            <button type="button" onClick={() => setProductTitle("鑰匙圈")}>
              鑰匙圈
            </button>
            <button type="button" onClick={() => setProductTitle("包包")}>
              包包
            </button>
            <button type="button" onClick={() => setProductTitle("奶嘴夾")}>
              奶嘴夾
            </button>
            <button type="button" onClick={() => setProductTitle("室內裝飾")}>
              室內裝飾
            </button>
          </div>
        </section>

        <section className="rightSection">
          <div className="filterCategory">
            <h1>{productTitle}</h1>
          </div>
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
