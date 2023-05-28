import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useLoginProps = ({}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const addPage = useNavigate();
  let [token, setToken, , setLayout, runRoute] = useAuth();

  const onLogin = (evt) => {
    evt.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    let data = {
      email,
      password,
    };

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
        addPage(runRoute);
      });
  };
  return { onLogin, emailRef, passwordRef };
};
