import IMAGES from "../images/image.js";
export default function Header() {
  return (
    <header id="header">
      <nav>
        <ul>
          <a href="">
            <li>首頁</li>
          </a>
          <a href="">
            <li>商品一覽</li>
          </a>
          <a href="">
            <li>關於Bonne idée</li>
          </a>
        </ul>
      </nav>

      <div>
        <a href="#">
          <img className="header-logo" src={IMAGES.logo} alt="logo" />
        </a>
      </div>
    </header>
  );
}
