import { useState } from "react";
import { BtnLoader } from "../../../Components/BtnLoader/btnLoader.component";
import { useAuth } from "../../../Hooks/useAuth";
import { useData } from "../../../Hooks/useData";
import "./style.scss";

export const Mark = () => {
  const [token, , , setLayout, , setRunRoute] = useAuth();
  const [data, id, setId, info, setInfo, setData] = useData();
  const [loader, setLoader] = useState(true);

  let index = 0;
  data.find((el, i) => {
    index = i;
    return el.id == id;
  });

  const onMark = () => {
    if (!token) {
      setRunRoute("/invoice&id/:id");
      setLayout(false);
    } else {
      setLoader(false);
      fetch(`https://invoices-8ehs.onrender.com/invoices/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          userId: `${token.user.id}`,
          paid: true,
          email: info.email,
          to: info.to,
          dueDate: new Date(),
          term: info.term,
          description: info.description,
          price: info.price,
        }),
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((newData) => {
          data[index] = newData;
          setData(data);
          setInfo(newData);
          setLoader(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <button onClick={onMark}>
      <div className="markAspaid">
        {loader ? "Mark as Paid" : <BtnLoader />}
      </div>
    </button>
  );
};
