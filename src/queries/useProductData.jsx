import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProducts = () => {
  const query = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(
        import.meta.env.VITE_BASE_API_URL + "/products"
      );
      return response.data;
    },
  });
  return query;
};

export const useGetProductDetail = (productId) => {
  const query = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const response = await axios.get(
        import.meta.env.VITE_BASE_API_URL + `/products/${productId}`
      );
      return response.data;
    },
  });
  return query;
};

export const useGetCategories = () => {
  const query = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axios.get(
        import.meta.env.VITE_BASE_API_URL + "/categories"
      );
      return response.data;
    },
  });
  return query;
};

export const useGetColors = () => {
  const query = useQuery({
    queryKey: ["color"],
    queryFn: async () => {
      const response = await axios.get(
        import.meta.env.VITE_BASE_API_URL + "/colors"
      );
      return response.data;
    },
  });
  return query;
};
