import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../config.js";

export const useGetColorsData = () => {
  const query = useQuery({
    queryKey: ["color"],
    queryFn: async () => {
      const response = await axios.get(config.baseApiUrl + "/api/v1/colors");
      return response.data;
    },
  });
  return query;
};
