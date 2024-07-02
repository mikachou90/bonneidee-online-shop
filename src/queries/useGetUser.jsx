import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const useGetUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(
        import.meta.env.VITE_BASE_API_URL + "/user",
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

export default useGetUser;
