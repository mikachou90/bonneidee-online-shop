import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import config from "../config.js";

const useGetUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(config.baseApiUrl + "/api/v1/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
  return query;
};

export default useGetUser;
