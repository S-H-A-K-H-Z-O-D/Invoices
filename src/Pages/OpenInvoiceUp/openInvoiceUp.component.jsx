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
  const [, id, , info] = useData();
  const goTo = useNavigate();
  console.log(id);

  const onEdit = () => {
    if (!token) {
      setRunRoute("/edit-invoice");
      setLayout(false);
    } else goTo("/edit-invoice");
  };

  const onDelete = () => {
    if (!token) {
      setRunRoute("/open-invoice-up");
      setLayout(false);
    } else {
      fetch(`https://invoices-8ehs.onrender.com/invoices`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${JSON.stringify(token)}`,
        },
      });
    }
  };

  const onMark = () => {
    if (!token) {
      setRunRoute("/open-invoice-up");
      setLayout(false);
    } else {
      fetch(`https://invoices-8ehs.onrender.com/invoices/${id}`, {
        method: "PUT",
        Body: JSON.stringify({
          userId: 2,
          paid: true,
        }),
        Headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
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
