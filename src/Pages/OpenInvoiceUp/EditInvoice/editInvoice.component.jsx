import "./editInvoice.scss";
import "../../../Components/InvoiceForm/invoiceForm.scss";
import "../openInvoiceUp.scss";
import { GoBack } from "../../../Components/Goback";
import { Input } from "../../../Components/InvoiceForm";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useData } from "../../../Hooks/useData";
import { useAuth } from "../../../Hooks/useAuth";

export const EditInvoice = () => {
  const [token] = useAuth();
  const [data, id, setId, info, setInfo, setData] = useData();
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const termRef = useRef();
  const jobRef = useRef();
  const priceRef = useRef();

  const onEdit = () => {
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
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <div className="cover">
      <GoBack />
      <div className="editPage">
        <h3 className="mb-4">
          Edit<span>#</span>XM9141
        </h3>

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

        <div className="d-flex justify-content-end mt-4">
          <button onClick={onCancel} className="cancel">
            Cancel
          </button>
          <button onClick={onEdit} className="save">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
