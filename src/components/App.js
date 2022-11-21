import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";
import AuthProvider from "../contexts/authContext";
import EditMoneyInPage from "../pages/EditMoneyInPage/EditMoneyInPage";
import EditMoneyOutPage from "../pages/EditMoneyOutPage /EditMoneyOutPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MoneyInPage from "../pages/MoneyInPage/MoneyInPage";
import MoneyOutPage from "../pages/MoneyOutPage/MoneyOutPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import WalletPage from "../pages/WalletPage/WalletPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/wallet/money-in" element={<MoneyInPage />}></Route>
          <Route path="/wallet/money-out" element={<MoneyOutPage />}></Route>
          <Route
            path="/wallet/money-in/:id"
            element={<EditMoneyInPage />}
          ></Route>
          <Route
            path="/wallet/money-out/:id"
            element={<EditMoneyOutPage />}
          ></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
