import { useNavigate, useParams } from "react-router-dom";
import "./openInvoiceUp.scss";
import "../Home/Invoices/invoice.scss";
import { InvoiceWindow } from "./InvoiceWindow/invoiceWindow";
import { GoBack } from "../../Components/Goback";
import { useAuth } from "../../Hooks/useAuth";
import { useData } from "../../Hooks/useData";
import { DeleteInvoice } from "./DeleteInvoice";
import { Mark } from "./MarkAsPaid";
import { useEffect } from "react";

export const OpenInvoiceUp = () => {
  const [token, , , setLayout, , setRunRoute] = useAuth();
  const [data, , setId, info, setInfo] = useData();
  const ID = useParams();
  const goTo = useNavigate();
  const findInvoice = data.find((el) => el.id == ID.id);

  setId(ID.id);
  setInfo(findInvoice);

  const onEdit = () => {
    if (!token) {
      setRunRoute("/edit-invoice");
      setLayout(false);
    } else
      goTo("/edit-invoice", {
        state: findInvoice,
      });
  };

  return (
    <>
      <GoBack />

      <div className="d-flex align-items-center wrapper">
        <div className="d-flex align-items-center">
          <p className="name m-0">Status</p>
          <p className={info.paid ? "status_paid m-0" : "status_pending m-0"}>
            {info.paid ? "Paid" : "Pending"}
          </p>
        </div>

        <div className="wrapper__btns ms-auto">
          <button onClick={onEdit}>Edit</button>
          <DeleteInvoice />
          {info.paid ? null : <Mark />}
        </div>
      </div>

      <InvoiceWindow />
    </>
  );
};
