import "../styles/categoryCard.scss";
import ProductCard from "./ProductCard";
export default function CategoryCard() {
  return (
    <div id="categoryCard">
      <h2 className="categoryTittle">鑰匙圈</h2>
      <div className="displayCards">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
