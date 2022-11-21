import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/authContext";

export default function MoneyInPage() {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const { config } = useContext(AuthContext);

  const body = { value, description };

  function MoneyInSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/wallet/money-in", body, config)
      .then(() => navigate("/wallet"))
      .catch((res) => console.log(res.response.data));
  }
  return (
    <MoneyInFormat>
      <div>
        <p>Nova entrada</p>
        <ion-icon
          name="chevron-back-circle"
          onClick={() => navigate("/wallet")}
        ></ion-icon>
      </div>

      <form onSubmit={MoneyInSubmit}>
        <input
          type="number"
          placeholder="Valor (max: 9999,99)"
          min={0.01}
          max={9999.99}
          step={0.01}
          onChange={(e) => setValue(Number(e.target.value))}
          required
        ></input>
        <input
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          required
        ></input>
        <button>Salvar entrada</button>
      </form>
    </MoneyInFormat>
  );
}

const MoneyInFormat = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 20px 16px 20px;
  div {
    height: 32px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    align-items: center;
    ion-icon {
      font-size: 32px;
      color: #fff;
      --ionicon-stroke-width: 40px;
      cursor: pointer;
    }
  }
  form {
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 26px;
    font-weight: 700;
    color: #fff;
  }
  button {
    height: 45px;
    background-color: #5e00a3;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
`;
