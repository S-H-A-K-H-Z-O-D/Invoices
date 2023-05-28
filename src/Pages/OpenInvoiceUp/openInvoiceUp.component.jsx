import { useNavigate } from "react-router-dom";
import "./openInvoiceUp.scss";
import "../Home/Invoices/invoice.scss";
import { InvoiceWindow } from "./InvoiceWindow/invoiceWindow";
import { GoBack } from "../../Components/Goback";
import { useAuth } from "../../Hooks/useAuth";

export const OpenInvoiceUp = () => {
  const [token, , , setLayout, , setRunRoute] = useAuth();
  const goTo = useNavigate();

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
    } else console.log("deleted");
  };

  const onMark = () => {
    if (!token) {
      setRunRoute("/open-invoice-up");
      setLayout(false);
    } else console.log("marked");
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
          <button onClick={onDelete}>Delete</button>
          <button onClick={onMark}>Mark as Paid</button>
        </div>
      </div>

      <InvoiceWindow />
    </>
  );
};
