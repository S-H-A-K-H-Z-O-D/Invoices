import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useData } from "../../../../../Hooks/useData";

export const Filter = () => {
  const [, , , , , setData] = useData();
  const [list, setList] = useState(false);
  const [all, setAll] = useState(false);
  const [pending, setPending] = useState(false);
  const [paid, setPaid] = useState(false);
  const allRef = useRef();
  const pendingRef = useRef();
  const paidRef = useRef();

  const chooseOption = () => {
    setList(!list);
  };

  useEffect(() => {
    allRef.current.checked = all;
    pendingRef.current.checked = pending;
    paidRef.current.checked = paid;
  }, [all, paid, pending]);

  const onCheckAll = () => {
    setAll(!all);
    setPending(false);
    setPaid(false);
    fetch("https://invoices-8ehs.onrender.com/invoices")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setList(!list);
      });
  };

  const onCheckPending = () => {
    setAll(false);
    setPending(!pending);
    setPaid(false);
    fetch("https://invoices-8ehs.onrender.com/invoices")
      .then((res) => res.json())
      .then((data) => {
        setData(data.filter((el) => el.paid !== true));
        setList(!list);
      });
  };

  const onCheckPaid = () => {
    setAll(false);
    setPending(false);
    setPaid(!paid);
    fetch("https://invoices-8ehs.onrender.com/invoices")
      .then((res) => res.json())
      .then((data) => {
        setData(data.filter((el) => el.paid === true));
        setList(!list);
      });
  };

  return (
    <div className="filter">
      <button onClick={chooseOption} className="filter__btn">
        Filter by status
        {list ? (
          <span className="filter__btn__down_to_up"></span>
        ) : (
          <span className="filter__btn__up_to_down"></span>
        )}
      </button>

      <ul className={list ? "list-unstyled ps-3 filter__list" : "d-none"}>
        <li>
          <button>
            <input ref={allRef} onClick={onCheckAll} id="all" type="checkbox" />
            <label htmlFor="all">All</label>
          </button>
        </li>
        <li>
          <button>
            <input
              ref={pendingRef}
              onClick={onCheckPending}
              id="pending"
              type="checkbox"
            />
            <label htmlFor="pending">Pending</label>
          </button>
        </li>
        <li>
          <button>
            <input
              ref={paidRef}
              onClick={onCheckPaid}
              id="paid"
              type="checkbox"
            />
            <label htmlFor="paid">Paid</label>
          </button>
        </li>
      </ul>
    </div>
  );
};
