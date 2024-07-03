import "../styles/allProductPage.scss";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetProducts, useGetCategories } from "../queries/useProductData";
import { AlertSnackbar } from "../components/Alert";
import { LoadingOverlay } from "../components/Loading";

export default function AllProductPage() {
  const { data: productData = [], isLoading, isError } = useGetProducts();
  const { data: categoryData = [] } = useGetCategories();
  const [currentCategory, setCurrentCategory] = useState("");
  const [isFav, setIsFav] = useState({
    isAddToFav: false,
    isRemoveFav: false,
  });

  const handleFilterClick = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <div id="allProductPage">
        <AlertSnackbar
          message="已加入收藏清單"
          severity="success"
          open={isFav.isAddToFav}
          setOpen={setIsFav}
        />

        <AlertSnackbar
          message="已移除收藏清單"
          severity="success"
          open={isFav.isRemoveFav}
          setOpen={setIsFav}
        />

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
                <ProductCard
                  setIsFav={setIsFav}
                  AlertSnackbar
                  key={product._id}
                  product={product}
                  isLoading={isLoading}
                  isError={isError}
                />
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
