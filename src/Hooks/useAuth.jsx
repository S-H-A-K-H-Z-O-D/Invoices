import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export const useAuth = () => {
  const { token, setToken, layout, setLayout } = useContext(AuthContext);

  return [token, setToken, layout, setLayout];
};
