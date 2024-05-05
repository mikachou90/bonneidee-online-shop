import { useAuth0 } from "@auth0/auth0-react";

export default function LogInPage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>User Loading ...</div>;
  }

  return isAuthenticated ? (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <div>
      <h1>not authenticated </h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
}
