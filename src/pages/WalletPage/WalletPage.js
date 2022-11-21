import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/authContext";
import WalletDisplay from "./WalletDisplay";

export default function WalletPage() {
  const navigate = useNavigate();
  const {username} = useContext(AuthContext)

  return (
    <WalletPageFormat>
      <PageTop>
        <p>Olá, {username}</p>
        <ion-icon onClick={() => navigate("/")} name="exit-outline"></ion-icon>
      </PageTop>
      <WalletDisplay></WalletDisplay>
      <WalletButtons>
        <button onClick={() => navigate("/money-in")}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </button>
        <button onClick={() => navigate("/money-out")}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </button>
      </WalletButtons>
    </WalletPageFormat>
  );
}

const WalletPageFormat = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 20px 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PageTop = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 26px;
    font-weight: 700;
    color: #fff;
  }
  ion-icon {
    font-size: 32px;
    color: #fff;
    --ionicon-stroke-width: 40px;
    cursor: pointer;
  }
`;

const WalletButtons = styled.div`
  height: 115px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 48%;
    height: 115px;
    border-radius: 5px;
    background-color: #5e00a3;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 17px;
      font-weight: 700;
      color: #fff;
      width: 50%;
      text-align: start;
    }
    ion-icon {
      font-size: 28px;
      color: #fff;
      --ionicon-stroke-width: 40px;
    }
  }
`;
