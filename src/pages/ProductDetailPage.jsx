import "../styles/productDetailPage.scss";
import { useState } from "react";
import { useGetProductDetail } from "../queries/useProductData";
import { useGetColorsData } from "../queries/useColorData";
import { usePostCart } from "../queries/useCartData";
import { useParams } from "react-router-dom";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import RecommendItem from "../components/RecommendItem";
import { LoadingOverlay } from "../components/Loading";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { data: product, isLoading } = useGetProductDetail(productId);
  const { data: colors } = useGetColorsData();
  const [isFav, setIsFav] = useState(false);
  const [qty, setQty] = useState(1);
  const [selected1stColor, setS1stSelectedColor] = useState();
  const [selected2ndColor, setS2ndSelectedColor] = useState();
  const mutate = usePostCart();

  function HandleAddToCart() {
    const newCartItem = {
      productId: productId,
      quantity: qty,
      colorIds: [selected1stColor, selected2ndColor].filter((color) => color),
    };
    mutate.mutate(newCartItem);
  }

  function handleFavProduct() {
    setIsFav(!isFav);
  }

  function handleQtyChange(action) {
    if (action === "add") {
      setQty(qty + 1);
    } else if (action === "minus") {
      if (qty === 1) return;
      setQty(qty - 1);
    }
  }
  console.log("qty", qty);
  const handle1stColorChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setS1stSelectedColor(selectedOption.id);
  };

  const handle2ndColorChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setS2ndSelectedColor(selectedOption.id);
  };

  // console.log(handleColorChange);
  console.log([selected1stColor, selected2ndColor]);

  return (
    <div id="productDetail">
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <section id="detailSection">
          <div className="productCard">
            <div className="detailImgWrapper">
              <img
                src="/src/assets/pictures/bottleHolder1.jpg"
                alt="product picture"
              />
            </div>
            <div className="contentWrapper">
              <h2>{product.name}</h2>
              <h3>${product.price}</h3>
              <p className="notificationNote">客製商品</p>

              <div className="description">
                <p>{product.description}</p>
                <p className="size">
                  <span>尺寸:</span>
                  {product.sizeDescription}
                </p>
              </div>
              <div className="addToCart">
                {product.maxColors === 2 ? (
                  <div>
                    <div className="productColorWrapper">
                      <p>請選擇主色</p>
                      <select
                        name="productColor"
                        id="productColor"
                        onChange={handle1stColorChange}
                      >
                        <option value="">-請選擇-</option>
                        {colors.map((color) => (
                          <option
                            key={color._id}
                            id={color._id}
                            value={color.name}
                          >
                            {color.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="productColorWrapper">
                      <p>請選擇輔色</p>
                      <select
                        name="productColor"
                        id="productColor"
                        onChange={handle2ndColorChange}
                      >
                        <option value="">-請選擇-</option>
                        {colors.map((color) => (
                          <option
                            key={color._id}
                            id={color._id}
                            value={color.name}
                          >
                            {color.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  <div className="productColorWrapper">
                    <p>請選擇主色</p>
                    <select
                      name="productColor"
                      id="productColor"
                      onChange={handle1stColorChange}
                    >
                      <option value="">-請選擇-</option>
                      {colors.map((color) => (
                        <option
                          key={color._id}
                          id={color._id}
                          value={color.name}
                        >
                          {color.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="btnGroup">
                  <div className="addQty">
                    <div className="qty">
                      <button
                        type="button"
                        onClick={() => handleQtyChange("minus")}
                      >
                        <CiCircleMinus className="icon" />
                      </button>
                      <p>{qty}</p>
                      <button
                        type="button"
                        onClick={() => handleQtyChange("add")}
                      >
                        <CiCirclePlus className="icon" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="addBtn"
                      onClick={HandleAddToCart}
                    >
                      加入購物車
                    </button>
                  </div>

                  <button
                    type="button"
                    className="favProductBtn"
                    onClick={handleFavProduct}
                  >
                    {!isFav && <FaRegHeart size={20} />}
                    {isFav && <FaHeart id="filledHeart" size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="productNoti">
            <h3>注意事項</h3>
            <div className="content">
              <ul>
                <li>
                  客製商品為接單後開始排程製作，不接受急件訂單。詳細請閱
                  <Link to="/order-noti">訂購流程</Link>
                </li>
                <li>使用的棉線為天然棉花製成，線條上有咖啡色小點為棉花殼。</li>
                <li>棉線織品易潮濕，建議保持乾燥。</li>
                <li>
                  基本上棉線織品不建議水洗，若需要可用中性洗劑以冷水或溫水輕揉清潔（不宜久泡），平鋪陰乾即可。切勿使用熱水，天然棉線會有熱縮情況。另深色線材可能會染色，請知悉。
                </li>
                <li>若必要可使用酒精噴灑消毒，但噴灑過量也可能造成染色。</li>
                <li>平常可使用吸塵器除塵。</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      <section id="recommendCards">
        <h3>推薦商品</h3>
        <RecommendItem />
      </section>
    </div>
  );
}
