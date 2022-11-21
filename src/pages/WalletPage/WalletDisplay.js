/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/authContext";

export default function WalletDisplay() {
  const navigate = useNavigate()
  const { config } = useContext(AuthContext);
  const [walletMovimentation, setWalletMovimentation] = useState([]);
  const [balance, setBalance] = useState(0);

  function balanceTotal(data) {
    if (data.length===0){
      setBalance(0)
    }
    let newBalance = 0;
    if (data.length !== 0) {
      data.forEach((obj) => (obj.type==="money-in" ? newBalance += obj.value : newBalance -= obj.value));
      if (newBalance<=0 && newBalance>=-0.01){
        setBalance(0)
        return
      }
      setBalance(newBalance.toFixed(2));
    }
  }

  function getSucess(data) {
    setWalletMovimentation(data.reverse());
    balanceTotal(data);
  }

  function showWalletMovimentation() {
    axios
      .get("http://localhost:5000/wallet", config)
      .then((res) => getSucess(res.data))
      .catch((res) => console.log(res.response.data));
  }

  function deleteWalletCard(id){
    if(window.confirm("Deseja mesmo apagar?")){
      axios.delete(`http://localhost:5000/wallet/${id}`, config)
    .then(()=> showWalletMovimentation())
    .catch(res=> console.log(res.response.data))
    }
  }

  function editWalletCard(id, type){
    if(type==="money-out"){
      navigate(`/edit-money-out/${id}`)
    } else {
      navigate(`/edit-money-in/${id}`)
    }
  }

  useEffect(() => {
    showWalletMovimentation();
  }, []);

  return (
    <WalletDisplayFormat>
      <InsAndOuts>
        {walletMovimentation.length !== 0 ? (
          walletMovimentation.map((obj, i) => (
            <CardOfMoneyMoviment key={i}>
              <DayAndDescription onClick={()=>editWalletCard(obj._id,obj.type)}>
                <DayOfMoneyMoviment>{obj.date}</DayOfMoneyMoviment>
                <p>{obj.description}</p>
              </DayAndDescription>
              <MoneyAndDelete>
                <MoneyMovimentValue type={obj.type}>
                  {obj.value.toFixed(2)}
                </MoneyMovimentValue>
                <ion-icon name="close-outline" onClick={()=>deleteWalletCard(obj._id)}></ion-icon>
              </MoneyAndDelete>
            </CardOfMoneyMoviment>
          ))
        ) : (
          <p>Não há registros de entrada ou saída</p>
        )}
      </InsAndOuts>
      <Balance balance={balance}>
        <h2>SALDO</h2>
        <p>{balance}</p>
      </Balance>
    </WalletDisplayFormat>
  );
}

const WalletDisplayFormat = styled.div`
  height: 70%;
  width: 100%;
  padding: 23px 0px 10px 12px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const InsAndOuts = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  overflow: scroll;
  min-height: 18px;
  margin-bottom: 31px;
`;
const CardOfMoneyMoviment = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const DayAndDescription = styled.div`
  display: flex;
  width: 66%;
  cursor: pointer;
  p{
    max-width: 79%;
    flex-wrap: wrap;
    word-wrap: break-word;
    align-items: center;
  }
`
const DayOfMoneyMoviment = styled.p`
min-width: 41.1px;
  color: #adadad;
  margin-right: 7px;
`;
const MoneyAndDelete = styled.div`
display: flex;
  ion-icon{
    color: #adadad;
    font-size: 20px;
    margin-right: 5px;
    cursor: pointer;
  }
`
const MoneyMovimentValue = styled.p`
  color: ${(props) => (props.type === "money-out" ? "#C70000" : "green")};
  margin-right: 8px;
`;
const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway", sans-serif;
  position: absolute;
  width: 100%;
  height: 41px;
  padding: 0 11px 0 12px;
  bottom: 0px;
  left: 0;
  background-color: #fff;
  border-radius: 5px;
  h2 {
    font-size: 17px;
    font-weight: 700;
  }
  p {
    font-size: 17px;
    color: ${props=> props.balance>=0 ? "green" : "#C70000"};
  }
`;
