import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageFormat>
      <h1>MyWallet</h1>
      <LoginForm></LoginForm>
      <StyledLinkLogin to="/register">
        Primeira vez? Cadastre-se!
      </StyledLinkLogin>
    </LoginPageFormat>
  );
}

const LoginPageFormat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 32px;
    margin-bottom: 33px;
    color: #fff;
    font-family: "Saira Stencil One", cursive;
  }
  p {
    margin-top: 35.5px;
    color: #fff;
  }
`;

const StyledLinkLogin = styled(Link)`
  margin-top: 35.5px;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
`;
