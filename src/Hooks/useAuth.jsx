import { useContext } from "react";
import {AuthContext} from "../Contexts/auth.jsx";

export const useAuth = () => {
  const { token, setToken, layout, setLayout, runRoute, setRunRoute } =
    useContext(AuthContext);

  return [token, setToken, layout, setLayout, runRoute, setRunRoute];
};
