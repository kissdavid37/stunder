import React, { useState } from "react";
import "./Login.css";
import instance from "../axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Contexts/authContext";

const Login = () => {
  const { setLoginToken } = useAuth();
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginAction = async (username, pass) => {
    try {
      const token = await instance.post(
        "/login",
        {},
        {
          auth: {
            username: username,
            password: pass,
          },
        }
      );

      setLoginToken(token);
      return token.data.token;
    } catch (error) {
      console.log(error);
    }
  };
  //const token=loginAction(email,password);
  const authorize = async () => {
    const token = await loginAction(username, password);
    if (username == "") {
      alert("Felhasználónév megadása kötelező!");
    }
    if (password == "") {
      alert("Jelszó megadása kötelező!");
    } else if (token == null) {
      alert("Hibás felhasználónév vagy jelszó!");
    } else {
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("password", password);
      history("/question", { replace: true });
    }
  };

  const register = () => {
    history("/register", { replace: true });
  };

  return (
    <div className="login__outercontainer">
      <div className="login__container">
        <form className="loginForm">
          <div className="userDetails">
            <h1 className="log">Stunder</h1>
            <div className="inputs">
              <span className="details">Felhasználónév</span>
              <input
                className="userinputs"
                type="text"
                placeholder="Felhasználónév"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputs">
              <span className="details">Jelszó</span>
              <input
                className="userinputs"
                type="password"
                placeholder="Jelszó"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="link" onClick={register}>
              Nincs fiókod? kattints ide.
            </p>
          </div>

          <div className="button">
            {/* <Link className="button" to="/question" > */}
            <input type="button" onClick={authorize} value="Bejelentkezés" />
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
