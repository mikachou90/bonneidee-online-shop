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
import AdminPage from "./pages/AdminPage";

const AuthProfile = withAuthenticationRequired(UserPage);

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
      { path: "/my-page", element: <UserPage /> },
      { path: "/order-progress", element: <OrderProgressPage /> },
      {
        path: "/user/profile",
        element: <AuthProfile />,
      },
      { path: "/admin", element: <AdminPage /> },
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
