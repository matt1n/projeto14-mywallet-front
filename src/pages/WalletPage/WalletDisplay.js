/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/authContext";

export default function WalletDisplay() {
  const { config } = useContext(AuthContext);
  const [walletMovimentation, setWalletMovimentation] = useState([]);
  const [balance, setBalance] = useState(0);

  function balanceTotal(data) {
    let newBalance = balance;
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

  useEffect(() => {
    showWalletMovimentation();
  }, []);

  return (
    <WalletDisplayFormat>
      <InsAndOuts>
        {walletMovimentation.length !== 0 ? (
          walletMovimentation.map((obj, i) => (
            <CardOfMoneyMoviment key={i}>
              <div>
                <DayOfMoneyMoviment>{obj.date}</DayOfMoneyMoviment>
                <p>{obj.description}</p>
              </div>
              <MoneyMovimentValue type={obj.type}>
                {obj.value}
              </MoneyMovimentValue>
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
  margin-bottom: 31px;
`;
const CardOfMoneyMoviment = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  div {
    display: flex;
  }
`;
const DayOfMoneyMoviment = styled.p`
  color: gray;
  margin-right: 7px;
`;
const MoneyMovimentValue = styled.p`
  color: ${(props) => (props.type === "money-out" ? "red" : "green")};
  margin-right: 12px;
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
    color: ${props=> props.balance>=0 ? "green" : "red"};
  }
`;
