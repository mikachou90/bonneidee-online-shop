import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import AllProductPage from "./pages/AllProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import MyOrderPage from "./pages/MyOrderPage";
import LoginPage from "./pages/LoginPage";
import OrderProgressPage from "./pages/OrderProgressPage";
import OrderNoticePage from "./pages/OrderNoticePage";
import Profile from "./pages/user/Profile";
import "./App.scss";
import AdminPage from "./pages/AdminPage";

const AuthProfile = withAuthenticationRequired(Profile);

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
      { path: "/order-noti", element: <OrderNoticePage /> },
      { path: "/my-order", element: <MyOrderPage /> },
      { path: "/order-progress", element: <OrderProgressPage /> },
      {
        path: "/user/profile",
        element: <AuthProfile />,
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/admin", element: <AdminPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
