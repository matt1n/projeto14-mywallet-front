import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function MoneyOutPage() {
    const navigate = useNavigate()
    function MoneyOutSubmit(e){
        e.preventDefault()
        navigate("/wallet")
    }
    return (
        <MoneyOutFormat>
        <p>Nova saída</p>
        <form onSubmit={MoneyOutSubmit}>
            <input placeholder="Valor"></input>
            <input placeholder="Descrição"></input>
            <button>Salvar saída</button>
        </form>
    </MoneyOutFormat>
    )
};

const MoneyOutFormat = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px 25px 16px 25px;
    form{
        display: flex;
        flex-direction: column;
    }
    p{
        font-size: 26px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 40px;
    }
    button{
        height: 45px;
        background-color: #5e00a3;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
    }
`