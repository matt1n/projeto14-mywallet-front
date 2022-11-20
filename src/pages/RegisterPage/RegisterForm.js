import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const body = {name, email, password}

  function registerSucess(data){
    navigate("/")
  }
  function registerError(data){
    let message = ""
    data.map(d=>message+=(`${d}\n`).replace(",",""))
    alert(message)
  }

  function registerSubmit(e) {
    e.preventDefault();
    if (password!==confirmPassword){
        alert("Senhas não coincidem")
        return
    }
    axios.post("http://localhost:5000/sign-up", body)
    .then(res=> registerSucess(res.data))
    .catch(res=> registerError(res.response.data))
  }
  return (
    <RegisterFormFormat onSubmit={registerSubmit}>
      <input
        placeholder="Nome"
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
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
      <input
        type="password"
        placeholder="Confirme a senha"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      ></input>
      <button>Cadastrar</button>
    </RegisterFormFormat>
  );
}

const RegisterFormFormat = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  input {
    height: 50px;
    margin-bottom: 15px;
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
