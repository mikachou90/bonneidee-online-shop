import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetColorsData = () => {
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
