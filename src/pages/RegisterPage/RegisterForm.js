import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RegisterForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function registerSubmit(e) {
      e.preventDefault();
      navigate("/");
    }
    return(
    <RegisterFormFormat onSubmit={registerSubmit}>
        <input placeholder="Nome"></input>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <input type="password" placeholder="Confirme a senha"></input>
        <button>Cadastrar</button>
      </RegisterFormFormat>
    )
};

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
`
