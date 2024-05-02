import Header from "./components/Header";
import Footer from "./components/Footer";
// import MainPage from "./pages/MainPage";
// import AllProductPage from "./pages/AllProductPage";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import LoginPage from "./pages/LoginPage";
import OrderProgress from "./pages/OrderProgress";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div id="globalWrapper">
        {/* <MainPage /> */}
        {/* <AllProductPage /> */}
        {/* <ProductDetailPage /> */}
        <OrderProgress />
      </div>
      <Footer />

      {/* <LoginPage /> */}
    </>
  );
}

export default App;
