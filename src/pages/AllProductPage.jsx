import "../styles/allProductPage.scss";
import CategoryCard from "../components/CategoryCard";
export default function AllProductPage() {
  return (
    <div id="allProductPage">
      <h1>All Products</h1>
      <div className="categorySection">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
