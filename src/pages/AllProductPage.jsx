import "../styles/allProductPage.scss";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetProducts, useGetCategories } from "../queries/useGetProduct";

export default function AllProductPage() {
  const { data: productData = [] } = useGetProducts();
  const { data: categoryData = [] } = useGetCategories();
  const [currentCategory, setCurrentCategory] = useState("");

  const handleFilterClick = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  console.log("type of productData:", typeof productData);

  return (
    <>
      <div id="allProductPage">
        <section className="leftSeciton">
          <h1>商品分類</h1>
          <div className="sideMenu">
            <ul>
              <li
                key="reset"
                className={currentCategory === "" ? "active" : ""}
              >
                <button type="button" onClick={() => handleFilterClick("")}>
                  全部商品
                </button>
              </li>
              {categoryData.map((category) => (
                <li
                  key={category._id}
                  className={currentCategory === category._id ? "active" : ""}
                >
                  <button
                    type="button"
                    onClick={() => handleFilterClick(category._id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rightSection">
          <div className="filterCategory">
            <h1>
              {categoryData.find((cat) => cat._id === currentCategory)?.name ||
                "全部商品"}
            </h1>
          </div>
          <div className="allProducts">
            {productData
              .filter((product) =>
                currentCategory
                  ? product.category._id === currentCategory
                  : true
              )
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
