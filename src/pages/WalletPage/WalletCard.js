import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/authContext.js";

export default function WalletCard({ obj, i, showWalletMovimentation }) {
  const navigate = useNavigate();
  const { config } = useContext(AuthContext);

  function deleteWalletCard(id) {
    if (window.confirm("Deseja mesmo apagar?")) {
      axios
        .delete(`http://localhost:5000/wallet/${id}`, config)
        .then(() => showWalletMovimentation())
        .catch((res) => console.log(res.response.data));
    }
  }

  function editWalletCard(id, type) {
    if (type === "money-out") {
      navigate(`/edit-money-out/${id}`);
    } else {
      navigate(`/edit-money-in/${id}`);
    }
  }
  return (
    <CardOfMoneyMoviment key={i}>
      <DayAndDescription onClick={() => editWalletCard(obj._id, obj.type)}>
        <DayOfMoneyMoviment>{obj.date}</DayOfMoneyMoviment>
        <p>{obj.description}</p>
      </DayAndDescription>
      <MoneyAndDelete>
        <MoneyMovimentValue type={obj.type}>
          {obj.value.toFixed(2)}
        </MoneyMovimentValue>
        <ion-icon
          name="close-outline"
          onClick={() => deleteWalletCard(obj._id)}
        ></ion-icon>
      </MoneyAndDelete>
    </CardOfMoneyMoviment>
  );
}

const CardOfMoneyMoviment = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const DayAndDescription = styled.div`
  display: flex;
  width: 66%;
  cursor: pointer;
  p {
    max-width: 79%;
    flex-wrap: wrap;
    word-wrap: break-word;
    align-items: center;
  }
`;
const DayOfMoneyMoviment = styled.p`
  min-width: 41.1px;
  color: #adadad;
  margin-right: 7px;
`;
const MoneyAndDelete = styled.div`
  display: flex;
  ion-icon {
    color: #adadad;
    font-size: 20px;
    margin-right: 5px;
    cursor: pointer;
  }
`;
const MoneyMovimentValue = styled.p`
  color: ${(props) => (props.type === "money-out" ? "#C70000" : "green")};
  margin-right: 8px;
`;
