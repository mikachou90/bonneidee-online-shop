import "../styles/recommendItem.scss";
import { useGetProducts } from "../queries/useProductData";
import ProductCard from "./ProductCard";
import { LoadingComponent } from "./Loading";

export default function RecommendItem({ setIsFav = () => {} }) {
  const { data: productData = [], isLoading, isError } = useGetProducts();

  return productData ? (
    <>
      {productData.length > 0 && (
        <div className="recommendItemWrapper">
          {productData &&
            productData
              .filter((item, index) => {
                return index < 4;
              })
              .map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  setIsFav={setIsFav}
                  isLoading={isLoading}
                  isError={isError}
                />
              ))}
        </div>
      )}
    </>
  ) : (
    <LoadingComponent loadingText="載入中..." />
  );
}
