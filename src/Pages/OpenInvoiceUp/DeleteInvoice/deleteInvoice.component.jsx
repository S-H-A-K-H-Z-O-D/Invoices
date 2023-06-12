import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { useData } from "../../../Hooks/useData";

export const DeleteInvoice = () => {
  const [token, , , setLayout, , setRunRoute] = useAuth();
  const [data, id, setId, info, setInfo, setData] = useData();
  const goTo = useNavigate();
  let index = 0;
  data.find((el, i) => {
    index = i;
    return el.id == id;
  });

  const onDelete = () => {
    if (!token) {
      setRunRoute("/open-invoice-up");
      setLayout(false);
    } else {
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
          goTo(-1);
        })
        .catch((err) => console.log(err));
    }
  };

  return <button onClick={onDelete}>Delete</button>;
};
