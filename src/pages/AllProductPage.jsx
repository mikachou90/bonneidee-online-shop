import "../styles/allProductPage.scss";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetProduct } from "../queries/useGetProduct";

export default function AllProductPage() {
  const [productTitle, setProductTitle] = useState("全部商品");
  const { data: productData } = useGetProduct();
  const [filterProduct, setFilterProduct] = useState(productData);

  console.log({ productData });

  const handleFilterClick = (title) => {
    setProductTitle(title);
    let filteredProducts = [];
    if (title === "全部商品") {
      filteredProducts = productData;
      setFilterProduct(filteredProducts);
    } else {
      filteredProducts = productData.filter(
        (product) => product.category.name === title
      );
      setFilterProduct(filteredProducts);
    }
  };

  console.log({ filterProduct });

  return (
    <>
      <div id="allProductPage">
        <section className="leftSeciton">
          <h1>商品分類</h1>
          <div className="sideMenu">
            <ul>
              <li className={productTitle === "全部商品" ? "active" : ""}>
                <button
                  type="button"
                  onClick={() => handleFilterClick("全部商品")}
                >
                  全部
                </button>
              </li>
              <li className={productTitle === "鑰匙圈" ? "active" : ""}>
                <button
                  type="button"
                  onClick={() => handleFilterClick("鑰匙圈")}
                >
                  鑰匙圈
                </button>
              </li>
              <li className={productTitle === "包包" ? "active" : ""}>
                <button type="button" onClick={() => handleFilterClick("包包")}>
                  包包
                </button>
              </li>
              <li className={productTitle === "奶嘴夾" ? "active" : ""}>
                <button
                  type="button"
                  onClick={() => handleFilterClick("奶嘴夾")}
                >
                  奶嘴夾
                </button>
              </li>
              <li className={productTitle === "室內裝飾" ? "active" : ""}>
                <button
                  type="button"
                  onClick={() => handleFilterClick("室內裝飾")}
                >
                  室內裝飾
                </button>
              </li>
            </ul>
          </div>
        </section>

        <section className="rightSection">
          <div className="filterCategory">
            <h1>{productTitle}</h1>
          </div>
          <div className="allProducts">
            {(filterProduct || []).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
