import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../config.js";

export const useGetProduct = () => {
  const query = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(config.baseApiUrl + "/api/v1/products");
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
        config.baseApiUrl + `/api/v1/products/${productId}`
      );
      return response.data;
    },
  });
  return query;
};

export const useGetCategory = () => {
  const query = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axios.get(
        config.baseApiUrl + "/api/v1/categories"
      );
      return response.data;
    },
  });
  return query;
};

export const useGetColor = () => {
  const query = useQuery({
    queryKey: ["color"],
    queryFn: async () => {
      const response = await axios.get(config.baseApiUrl + "/api/v1/colors");
      return response.data;
    },
  });
  return query;
};
