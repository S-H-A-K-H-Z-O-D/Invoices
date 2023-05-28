import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../Hooks/useData";
import "./invoice.scss";

export const Invoices = () => {
  const goInvoice = useNavigate();
  const elId = useRef();
  const [data] = useData();
  console.log(data);

  const onNavigate = (evt) => {
    console.log(elId.current);
    goInvoice("/open-invoice-up");
  };

  return (
    <ul className="p-0">
      {data.map((el) => (
        <li key={el.id} className="invoice">
          <button
            ref={elId}
            id={el.id}
            onClick={onNavigate}
            className="w-100 d-flex justify-content-between align-items-center invoice__card"
          >
            <p>
              <span>#</span>RT3080
            </p>
            <p>{el.createdDate}</p>
            <p>{el.to}</p>
            <p className="fw-bold">
              <span>£</span> {el.price}
            </p>
            <p
              className={
                el.paid ? "invoice__card__paid" : "invoice__card__pending"
              }
            >
              {el.paid ? "Paid" : "Pending"}
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
};
