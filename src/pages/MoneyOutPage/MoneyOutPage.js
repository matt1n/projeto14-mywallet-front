import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "../../contexts/authContext"

export default function MoneyOutPage() {
    const navigate = useNavigate()


    const [value, setValue] = useState(0)
    const [description, setDescription] = useState("")
    const {config} = useContext(AuthContext)

    const body = {value,description}

    function MoneyOutSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:5000/wallet/money-out", body, config)
        .then(()=>navigate("/wallet"))
        .catch((res)=> console.log(res.response.data))
    }
    return (
        <MoneyOutFormat>
        <p>Nova saída</p>
        <form onSubmit={MoneyOutSubmit}>
            <input type="number" placeholder="Valor" min={0.01} onChange={(e)=> setValue(Number(e.target.value))} required></input>
            <input placeholder="Descrição" onChange={(e)=> setDescription(e.target.value)} required></input>
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