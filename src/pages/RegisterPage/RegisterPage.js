import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <RegisterPageFormat>
      <h1>MyWallet</h1>
      <RegisterForm></RegisterForm>
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
