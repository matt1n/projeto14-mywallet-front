import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";
import AuthProvider from "../contexts/authContext";
import LoginPage from "../pages/LoginPage/LoginPage";
import MoneyInPage from "../pages/MoneyInPage/MoneyInPage";
import MoneyOutPage from "../pages/MoneyOutPage/MoneyOutPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import WalletPage from "../pages/WalletPage/WalletPage";

export default function App() {
    return(
    <BrowserRouter>
    <GlobalStyle/>
    <AuthProvider>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/money-in" element={<MoneyInPage/>}></Route>
            <Route path="/money-out" element={<MoneyOutPage/>}></Route>
        </Routes>
    </AuthProvider>
    </BrowserRouter>
    )
};


