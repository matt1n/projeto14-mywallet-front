import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RegisterPage() {
  const navigate = useNavigate();

  function registerSubmit(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <RegisterPageFormat>
      <h1>MyWallet</h1>
      <form onSubmit={registerSubmit}>
        <input placeholder="Nome"></input>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <input type="password" placeholder="Confirme a senha"></input>
        <button>Cadastrar</button>
      </form>
      <StyledLinkRegister to="/">Primeira vez? Cadastre-se!</StyledLinkRegister>
    </RegisterPageFormat>
  );
}

const RegisterPageFormat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 32px;
    margin-bottom: 33px;
    margin-top: 50px;
    color: #fff;
    font-family: "Saira Stencil One", cursive;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
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
  p {
    margin-top: 35.5px;
    color: #fff;
  }
`;

const StyledLinkRegister = styled(Link)`
  margin-top: 35.5px;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
`;
