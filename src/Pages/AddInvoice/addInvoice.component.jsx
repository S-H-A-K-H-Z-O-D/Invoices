import { GoBack } from "../../Components/Goback";
import { InvoiceForm } from "../../Components/InvoiceForm";
import "./addInvoice.scss";
import "../OpenInvoiceUp/openInvoiceUp.scss";

export const AddInvoice = () => {
  return (
    <div className="cover">
      <GoBack />
      <div className="addPage">
        <h3 className="mb-3">New Invoice</h3>

        <InvoiceForm />
        <div className="mt-4 d-flex justify-content-between">
          <button className="ms-0 cancel">Discard</button>
          <button className="save">Sace & Send</button>
        </div>
      </div>
    </div>
  );
};
