import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Hooks/useAuth";
import "./buttons.scss";

export const Buttons = () => {
  const [list, setList] = useState(false);
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

  const chooseOption = () => {
    setList(!list);
  };

  return (
    <div className="d-flex align-items-center ms-auto">
      <div className="filter">
        <button onClick={chooseOption} className="filter__btn">
          Filter by status
          {list ? (
            <span className="filter__btn__down_to_up"></span>
          ) : (
            <span className="filter__btn__up_to_down"></span>
          )}
        </button>

        {list ? (
          <ul className="list-unstyled ps-3 filter__list">
            <li>
              <input type="checkbox" /> All
            </li>
            <li>
              <input type="checkbox" /> Pending
            </li>
            <li>
              <input type="checkbox" /> Paid
            </li>
          </ul>
        ) : null}
      </div>
      <div className="ms-4">
        <button onClick={onAdd} className="add_btn d-flex align-items-center">
          <div className="el_btn me-3"></div>New invoice
        </button>
      </div>
    </div>
  );
};