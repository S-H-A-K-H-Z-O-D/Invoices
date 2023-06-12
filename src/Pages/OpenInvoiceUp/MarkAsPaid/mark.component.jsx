import { useAuth } from "../../../Hooks/useAuth";
import { useData } from "../../../Hooks/useData";

export const Mark = () => {
  const [token, , , setLayout, , setRunRoute] = useAuth();
  const [data, id, setId, info, setInfo, setData] = useData();

  let index = 0;
  data.find((el, i) => {
    index = i;
    return el.id == id;
  });

  const onMark = () => {
    if (!token) {
      setRunRoute("/open-invoice-up");
      setLayout(false);
    } else {
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
        })
        .catch((err) => console.log(err));
    }
  };

  return <button onClick={onMark}>Mark as Paid</button>;
};
