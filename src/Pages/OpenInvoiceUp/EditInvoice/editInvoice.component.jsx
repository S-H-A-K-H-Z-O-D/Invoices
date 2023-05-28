import "./editInvoice.scss";
import "../../../Components/InvoiceForm/invoiceForm.scss";
import "../openInvoiceUp.scss";
import { GoBack } from "../../../Components/Goback";
import { InvoiceForm } from "../../../Components/InvoiceForm";

export const EditInvoice = () => {
  return (
    <div className="cover">
      <GoBack />
      <div className="editPage">
        <h3 className="mb-4">
          Edit<span>#</span>XM9141
        </h3>

        <InvoiceForm />

        <div className="d-flex justify-content-end mt-4">
          <button className="cancel">Cancel</button>
          <button className="save">Save Changes</button>
        </div>
      </div>
    </div>
  );
};
