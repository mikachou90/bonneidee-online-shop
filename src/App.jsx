import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import AllProductPage from "./pages/AllProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
// import LoginPage from "./pages/LoginPage";
import OrderProgress from "./pages/OrderProgress";
import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    component: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      { path: "/products", element: <AllProductPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
      { path: "/order-progress", element: <OrderProgress /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
