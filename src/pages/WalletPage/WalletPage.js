import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function WalletPage() {
    const navigate = useNavigate()
    return(
        <WalletPageFormat>
            <PageTop>
                <p>Olá, Fulano</p>
                <ion-icon onClick={()=>navigate("/")} name="exit-outline"></ion-icon>
            </PageTop>
            <WalletDisplay>
                <InsAndOuts>
                    <CardOfMoneyMoviment>
                        <div>
                            <DayOfMoneyMoviment>30/11</DayOfMoneyMoviment>
                            <p>Almoço mãe</p>
                        </div>
                        <MoneyMovimentValue>39,90</MoneyMovimentValue>
                    </CardOfMoneyMoviment>
                </InsAndOuts>
                <Balance>
                    <h2>SALDO</h2>
                    <p>2849,96</p>
                </Balance>
            </WalletDisplay>
            <WalletButtons>
                <button onClick={()=> navigate("/money-in")}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </button>
                <button onClick={()=> navigate("/money-out")}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </button>
            </WalletButtons>
        </WalletPageFormat>
    )
};

const WalletPageFormat = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px 25px 16px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const WalletDisplay = styled.div`
    height: 70%;
    width: 100%;
    padding: 23px 11px 10px 12px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PageTop = styled.div`
    height: 32px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-size: 26px;
        font-weight: 700;
        color: #fff;
    }
    ion-icon{
        font-size: 32px;
        color: #fff;
        --ionicon-stroke-width: 40px;
        cursor:pointer;
    }
`

const InsAndOuts = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
`
const CardOfMoneyMoviment = styled.div`
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
    }
`
const DayOfMoneyMoviment = styled.p`
    color: gray;
    margin-right: 7px;
`
const MoneyMovimentValue = styled.p`
    color: red;
`
const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    h2{
        font-size: 17px;
        font-weight: 700;
    }
    p{
        font-size: 17px;
        color: green;
    }
`

const WalletButtons = styled.div`
     height: 115px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        button{
            width: 48%;
            height: 115px;
            border-radius: 5px;
            background-color: #5e00a3;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                font-size: 17px;
                font-weight: 700;
                color: #fff;
                width: 50%;
                text-align: start;
            }
            ion-icon{
                font-size: 28px;
                color: #fff;
                --ionicon-stroke-width: 40px;
    }
    }
`

