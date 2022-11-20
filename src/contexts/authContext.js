import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"))
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <AuthContext.Provider value={{ setToken, config, username, setUsername}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
