import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const useGetCart = () => {
  const { getAccessTokenSilently } = useAuth0();

  const query = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(
        import.meta.env.VITE_BASE_API_URL + "/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    },
  });
  return { ...query, isLoading: query.isLoading || query.isFetching };
};

export const usePostCart = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newCartItem) => {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        import.meta.env.VITE_BASE_API_URL + "/cart",
        newCartItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
  return mutation;
};

export const useDeleteProductInCart = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (deleteItem) => {
      const token = await getAccessTokenSilently();
      const response = await axios.delete(
        import.meta.env.VITE_BASE_API_URL + "/cart",
        {
          data: { productId: deleteItem },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
  return mutation;
};

export const useUpdateCartItem = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (updatedCartItem) => {
      const token = await getAccessTokenSilently();
      const response = await axios.patch(
        import.meta.env.VITE_BASE_API_URL + "/cart",
        updatedCartItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //wait for 2sec to simulate loading
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  return mutation;
};
