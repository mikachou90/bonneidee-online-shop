import "../styles/loginPage.scss";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogInPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div id="loginPage">
      <div className="leftSide">
        <img src="/src/assets/intro3.jpg" alt="" />
      </div>
      <div className="rightSide">
        <div className="logoWrapper">
          <img src="/src/assets/logo.png" alt="logo" />
          <p>好點子手作</p>
        </div>
        <div className="loginWrapper">
          <h2>請登入</h2>
          <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
      </div>
    </div>
  );
}
