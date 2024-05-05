import { useAuth0 } from "@auth0/auth0-react";
import useGetUser from "../../queries/useGetUser";

const LogInPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { data: userData, isLoading: isUserLoading } = useGetUser();

  console.log({ userData, isUserLoading });

  if (isLoading) {
    return <div>User Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <div>Not authenticated</div>;
  }

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p></p>
    </div>
  );
};

export default LogInPage;
