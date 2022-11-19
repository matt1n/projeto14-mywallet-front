import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <AuthContext.Provider value={{ setToken, config }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
