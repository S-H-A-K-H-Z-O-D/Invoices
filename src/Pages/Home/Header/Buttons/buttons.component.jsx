import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Hooks/useAuth";
import "./buttons.scss";
import { Filter } from "./Filter/filter.component";

export const Buttons = () => {
  const addPage = useNavigate();
  const [token, , , setLayout, , setRunRoute] = useAuth();

  const onAdd = () => {
    if (!token) {
      setRunRoute("/add-invoice");
      setLayout(false);
    } else {
      return addPage("/add-invoice");
    }
  };

  return (
    <div className="d-flex align-items-center ms-auto">
      <Filter />
      <div className="ms-4">
        <button onClick={onAdd} className="add_btn d-flex align-items-center">
          <div className="el_btn me-3"></div>New invoice
        </button>
      </div>
    </div>
  );
};
