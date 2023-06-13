import { useData } from "../../../Hooks/useData";
import { Invoices } from "../Invoices/invoices.component";
import { Buttons } from "./Buttons/buttons.component";
import "./header.scss";

export const Header = () => {
  const [data] = useData();
  return (
    <div className="w-100 head">
      <div className="w-100 d-flex">
        <div>
          <h1 className="m-0 fw-bold">Invoices</h1>
          <p className="m-0 invoice_counter">
            There are total <span>6</span> invoices
          </p>
        </div>

        <Buttons />
      </div>

      <div className="mt-5 head__invoices_wrapper">
        <Invoices />
        {data.length == 0 ? (
          <div className="d-flex flex-column align-items-center no_invoice">
            <h4 className="fw-bold">There is nothing here</h4>
            <p>
              Create an invoice by clicking the New Invoice button and get
              started
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
