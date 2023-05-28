import { useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(localToken);
  const [layout, setLayout] = useState(true);

  useEffect(() => {
    if (token) {
      return localStorage.setItem("token", JSON.stringify(token));
    }

    localStorage.removeItem("token");
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, layout, setLayout }}>
      {children}
    </AuthContext.Provider>
  );
};
