import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import AllProductPage from "./pages/AllProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import MyOrderPage from "./pages/MyOrderPage";
import LoginPage from "./pages/LoginPage";
import OrderProgress from "./pages/OrderProgress";
import OrderNotice from "./pages/OrderNotice";
import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      { path: "/products", element: <AllProductPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
      { path: "/order-noti", element: <OrderNotice /> },
      { path: "/my-order", element: <MyOrderPage /> },
      { path: "/order-progress", element: <OrderProgress /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
