import { GoBack } from "../../Components/Goback";
import { Input } from "../../Components/InvoiceForm";
import "./addInvoice.scss";
import "../OpenInvoiceUp/openInvoiceUp.scss";
import { useRef } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Hooks/useData";

export const AddInvoice = () => {
  const [token] = useAuth();
  const [data, , , , , setData] = useData();
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const termRef = useRef();
  const jobRef = useRef();
  const priceRef = useRef();

  const onAdd = () => {
    fetch("https://invoices-8ehs.onrender.com/invoices", {
      method: "POST",
      body: JSON.stringify({
        userId: `${token.user.id}`,
        paid: false,
        email: emailRef.current.value,
        to: nameRef.current.value,
        dueDate: new Date(),
        term: termRef.current.value,
        description: jobRef.current.value,
        price: priceRef.current.value,
      }),
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((newData) => {
        setData([...data, newData]);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const onDiscard = () => {
    navigate("/");
  };

  return (
    <div className="cover">
      <GoBack />
      <div className="addPage">
        <h3 className="mb-3">New Invoice</h3>

        <form>
          <Input
            ref={nameRef}
            id="name"
            type="text"
            className="d-flex flex-column"
          />
          <Input
            ref={emailRef}
            id="email"
            type="email"
            className="d-flex flex-column mt-3"
          />
          <div className="d-flex mt-3">
            <Input
              ref={dateRef}
              id="date"
              type="text"
              className="d-flex flex-column w-50 me-2"
            />
            <Input
              ref={termRef}
              id="term"
              type="number"
              className="d-flex flex-column w-50 ms-3"
            />
          </div>
          <Input
            ref={jobRef}
            id="job"
            type="text"
            className="d-flex flex-column mt-3"
          />
          <Input
            ref={priceRef}
            id="price"
            type="number"
            className="d-flex flex-column mt-3"
          />
        </form>

        <div className="mt-4 d-flex justify-content-between">
          <button onClick={onDiscard} className="ms-0 cancel">
            Discard
          </button>
          <button onClick={onAdd} className="save">
            Save & Send
          </button>
        </div>
      </div>
    </div>
  );
};
