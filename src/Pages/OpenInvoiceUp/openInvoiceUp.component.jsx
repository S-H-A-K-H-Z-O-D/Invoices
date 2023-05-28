import { useNavigate } from "react-router-dom";
import "./openInvoiceUp.scss";
import "../Home/Invoices/invoice.scss";
import { InvoiceWindow } from "./InvoiceWindow/invoiceWindow";
import { GoBack } from "../../Components/Goback";

export const OpenInvoiceUp = () => {
  const goEdit = useNavigate();

  const onEdit = () => {
    goEdit("/edit-invoice");
  };

  return (
    <>
      <GoBack />

      <div className="d-flex align-items-center wrapper">
        <div className="d-flex align-items-center">
          <p className="name m-0">Status</p>
          <p className="status m-0">Pending</p>
        </div>

        <div className="wrapper__btns ms-auto">
          <button onClick={onEdit}>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </div>
      </div>

      <InvoiceWindow />
    </>
  );
};
