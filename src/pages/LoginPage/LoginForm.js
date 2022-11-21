import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/authContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setUsername } = useContext(AuthContext);

  const body = { email, password };

  function loginSucess(data) {
    setUsername(data.username);
    setToken(data.token);
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.username);
    navigate("/wallet");
  }

  function loginError(data) {
    console.log(data);
    alert(data);
  }

  function submitLogin(e) {
    e.preventDefault();
    const promise = axios.post("http://localhost:5000/sign-in", body);
    promise.then((res) => loginSucess(res.data));
    promise.catch((res) => loginError(res.response.data));
  }
  return (
    <LoginFormFormat onSubmit={submitLogin}>
      <input
        type="email"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>
      <button>Entrar</button>
    </LoginFormFormat>
  );
}

const LoginFormFormat = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  input {
    height: 50px;
    margin-bottom: 15px;
    ::placeholder {
    }
  }
  button {
    height: 45px;
    background-color: #5e00a3;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
`;
