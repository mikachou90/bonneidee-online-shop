import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import config from "../config.js";

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

export const usePostOrder = () => {
  const { getAccessTokenSilently } = useAuth0();

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
  });

  return mutation;
};
