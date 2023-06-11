import { useNavigate } from "react-router-dom";
import "./openInvoiceUp.scss";
import "../Home/Invoices/invoice.scss";
import { InvoiceWindow } from "./InvoiceWindow/invoiceWindow";
import { GoBack } from "../../Components/Goback";
import { useAuth } from "../../Hooks/useAuth";
import { useData } from "../../Hooks/useData";

export const OpenInvoiceUp = () => {
  const [token, , , setLayout, , setRunRoute] = useAuth();
  console.log(token);
  const [data, id, , info, setInfo, setData] = useData();
  const goTo = useNavigate();
  const findInvoice = data.find((el) => el.id == id);

  const onEdit = () => {
    if (!token) {
      setRunRoute("/edit-invoice");
      setLayout(false);
    } else
      goTo("/edit-invoice", {
        state: findInvoice,
      });
  };

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
          let index = 0;
          data.find((el, i) => {
            index = i;
            return el.id == id;
          });
          const undeletedData = data.splice(index, 1);
          setData(undeletedData);
          goTo(-1);
        })
        .catch((err) => console.log(err));
    }
  };

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
          let index = 0;
          data.find((el, i) => {
            index = i;
            return el.id == id;
          });
          data[index] = newData;
          setData(data);
          setInfo(newData);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <GoBack />

      <div className="d-flex align-items-center wrapper">
        <div className="d-flex align-items-center">
          <p className="name m-0">Status</p>
          <p className={info?.paid ? "status_paid m-0" : "status_pending m-0"}>
            {info?.paid ? "Paid" : "Pending"}
          </p>
        </div>

        <div className="wrapper__btns ms-auto">
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onMark}>Mark as Paid</button>
        </div>
      </div>

      <InvoiceWindow />
    </>
  );
};
