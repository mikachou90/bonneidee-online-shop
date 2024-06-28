import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import config from "../config.js";

// to get all orders list
export const useGetOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const query = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(config.baseApiUrl + "/api/v1/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
  return query;
};

// to get a specific order detail
export const useGetOrder = (orderId) => {
  const { getAccessTokenSilently } = useAuth0();

  const query = useQuery({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(
        config.baseApiUrl + `/api/v1/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
  });
  return query;
};

// to post a new order
export const usePostOrder = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    queryKey: ["order"],
    mutationFn: async (order) => {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        config.baseApiUrl + "/api/v1/orders",
        order,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onMutate: async (order) => {
      await queryClient.cancelQueries(["order"]);
      const previousOrders = queryClient.getQueryData(["order"]);
      queryClient.setQueryData(["order"], (old) => [...old, order]);
      return { previousOrders };
    },
    onError: (error, order) => {
      queryClient.setQueryData(["order"], order.previousOrders);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["order", "cart"]);
    },
  });

  return mutation;
};
