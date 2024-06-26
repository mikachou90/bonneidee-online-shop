import "../styles/recommendItem.scss";
import { useGetProducts } from "../queries/useProductData";
import ProductCard from "./ProductCard";

export default function RecommendItem({ setIsFav = () => {} }) {
  const { data: productData = [] } = useGetProducts();

  return (
    <div className="recommendItemWrapper">
      {productData ? (
        productData
          .filter((item, index) => {
            return index < 4;
          })
          .map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              setIsFav={setIsFav}
            />
          ))
      ) : (
        <p>product data is missing</p>
      )}
    </div>
  );
}
