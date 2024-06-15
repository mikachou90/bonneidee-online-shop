import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import config from "../config.js";

export const useGetFavItem = () => {
  const { getAccessTokenSilently } = useAuth0();

  const query = useQuery({
    queryKey: ["favItemData"],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(
        config.baseApiUrl + "/api/v1/favorites",
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

export const useAddFavItem = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (productId) => {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        config.baseApiUrl + "/api/v1/favorites",
        { productIds: [productId] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("favItemData");
    },
  });
  return mutation;
};

export const useDeleteFavItem = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (productId) => {
      const token = await getAccessTokenSilently();
      const response = await axios.delete(
        config.baseApiUrl + "/api/v1/favorites",
        {
          data: { productIds: [productId] },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("favItemData");
    },
  });
  return mutation;
};
