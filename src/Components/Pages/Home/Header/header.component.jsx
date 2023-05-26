import { Buttons } from "./Buttons/buttons.component";
import "./header.scss";

export const Header = () => {
  return (
    <div className="w-100 d-flex head">
      <div>
        <h1 className="m-0">Invoices</h1>
        <p className="m-0">
          There are total <span>6</span> invoices
        </p>
      </div>

      <Buttons />
    </div>
  );
};
