import { Link } from "react-router-dom";
import { useData } from "../../../Hooks/useData";
import "./invoice.scss";

export const Invoices = () => {
  const [data] = useData();

  return (
    <ul className="p-0">
      {data.map((el) => (
        <li key={el.id} className="invoice">
          <Link to={`/invoice&id/${el.id}`} className="link">
            <button
              id={el.id}
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
          </Link>
        </li>
      ))}
    </ul>
  );
};
