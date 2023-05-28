import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(localToken);
  const [layout, setLayout] = useState(true);
  const [runRoute, setRunRoute] = useState("");

  useEffect(() => {
    if (token) {
      return localStorage.setItem("token", JSON.stringify(token));
    }

    localStorage.removeItem("token");
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, setToken, layout, setLayout, runRoute, setRunRoute }}
    >
      {children}
    </AuthContext.Provider>
  );
};
