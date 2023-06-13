import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BtnLoader } from "../../../Components/BtnLoader/btnLoader.component";
import { useAuth } from "../../../Hooks/useAuth";
import { useData } from "../../../Hooks/useData";
import "./deleteStyle.scss";

export const DeleteInvoice = () => {
  const [token, , , setLayout, , setRunRoute] = useAuth();
  const [data, id, setId, info, setInfo, setData] = useData();
  const [loader, setLoader] = useState(true);
  const goTo = useNavigate();
  let index = 0;
  data.find((el, i) => {
    index = i;
    return el.id == id;
  });

  const onDelete = () => {
    if (!token) {
      setRunRoute("/");
      setLayout(false);
    } else {
      setLoader(false);
      fetch(`https://invoices-8ehs.onrender.com/invoices/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          data.splice(index, 1);
          setLoader(true);
          goTo(-1);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <button onClick={onDelete}>
      <div className="delete">{loader ? "delete" : <BtnLoader />}</div>
    </button>
  );
};
