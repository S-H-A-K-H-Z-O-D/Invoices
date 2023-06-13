import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useData } from "./useData";

export const useLoginProps = ({}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const addPage = useNavigate();
  const [loader, setLoader] = useState(true);
  let [token, setToken, , setLayout, runRoute] = useAuth();
  const [data, id] = useData();
  const findInvoice = data.find((el) => el.id == id);

  const onLogin = (evt) => {
    evt.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    let data = {
      email,
      password,
    };
    setLoader(false);
    fetch("https://invoices-8ehs.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setToken(data);
        setLayout(true);
        addPage(runRoute, {
          state: findInvoice,
        });
        setLoader(true);
      });
  };
  return { onLogin, emailRef, passwordRef, loader };
};
