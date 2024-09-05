import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import AllProductPage from "./pages/AllProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrderProgressPage from "./pages/OrderProgressPage";

import OrderNoticePage from "./pages/OrderNoticePage";
import UserPage from "./pages/user/UserPage";
import "./App.scss";
import ShoppingCart from "./components/ShoppingCart";
import OrderForm from "./components/OrderForm";

const AuthProfile = withAuthenticationRequired(UserPage);

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      { path: "products", element: <AllProductPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
      { path: "order-noti", element: <OrderNoticePage /> },
      {
        path: "order-progress",
        element: <OrderProgressPage />,
        children: [
          { path: "shopping-cart", element: <ShoppingCart /> },
          { path: "order-form", element: <OrderForm /> },
        ],
      },
      {
        path: "user-page",
        element: <AuthProfile />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
