import "../styles/recommendItem.scss";
import { useGetProducts } from "../queries/useProductData";
import ProductCard from "./ProductCard";
import { LoadingComponent } from "./Loading";
import { Skeleton } from "@mui/material";
import { ErrorBox } from "../pages/ErrorPage";

export default function RecommendItem({ setIsFav = () => {} }) {
  const { data: productData = [], isLoading, isError } = useGetProducts();

  console.log("get product data is loading:", isLoading);

  if (isLoading)
    return <Skeleton variant="rectangular" width="100%" height="22rem" />;

  if (isError) return <ErrorBox />;

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
