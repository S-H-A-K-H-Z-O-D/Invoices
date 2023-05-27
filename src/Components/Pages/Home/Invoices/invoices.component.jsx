import { useNavigate } from "react-router-dom";
import "./invoice.scss";

export const Invoices = () => {
  const goInvoice = useNavigate();

  const onNavigate = () => {
    goInvoice("/open-invoice-up");
  };

  return (
    <ul className="p-0">
      <li className="invoice">
        <button
          onClick={onNavigate}
          className="w-100 d-flex justify-content-between align-items-center invoice__card"
        >
          <p>
            <span>#</span>RT3080
          </p>
          <p>Due 19 Aug 2021</p>
          <p>Jensen Huang</p>
          <p className="fw-bold">
            <span>£</span> 1,800.90
          </p>
          <p className="invoice__card__paid">Paid</p>
        </button>
      </li>
      <li className="invoice">
        <button className="w-100 d-flex justify-content-between align-items-center invoice__card">
          <p>
            <span>#</span>RT3080
          </p>
          <p>Due 19 Aug 2021</p>
          <p>Jensen Huang</p>
          <p className="fw-bold">
            <span>£</span> 1,800.90
          </p>
          <p className="invoice__card__pending">Pending</p>
        </button>
      </li>
    </ul>
  );
};
