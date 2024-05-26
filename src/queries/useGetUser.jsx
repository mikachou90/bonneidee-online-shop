import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import config from "../config.js";

const useGetUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      console.log("fetching user");
      const token = await getAccessTokenSilently();
      console.log({ token });
      const response = await axios.get(config.baseApiUrl + "/api/user", {
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
