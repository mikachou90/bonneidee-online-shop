import "../styles/loginPage.scss";
import Input from "../components/Input";

export default function LogInPage() {
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
          <form action="">
            <Input />
            <Input />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
