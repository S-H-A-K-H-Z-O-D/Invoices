import "./editInvoice.scss";
import "../../../Components/InvoiceForm/invoiceForm.scss";
import "../openInvoiceUp.scss";
import { GoBack } from "../../../Components/Goback";
import { Input } from "../../../Components/InvoiceForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useData } from "../../../Hooks/useData";
import { useAuth } from "../../../Hooks/useAuth";
import { BtnLoader } from "../../../Components/BtnLoader/btnLoader.component";

export const EditInvoice = () => {
  const [token] = useAuth();
  const [data, id, setId, info, setInfo, setData] = useData();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const termRef = useRef();
  const jobRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    nameRef.current.value = location.state.to;
    emailRef.current.value = location.state.email;
    dateRef.current.value = location.state.dueDate;
    termRef.current.value = location.state.term;
    jobRef.current.value = location.state.description;
    priceRef.current.value = location.state.price;
  }, []);

  const onEdit = () => {
    setLoader(false);
    fetch(`https://invoices-8ehs.onrender.com/invoices/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: `${token.user.id}`,
        paid: location.state.paid,
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
        let index = 0;
        data.find((el, i) => {
          index = i;
          return el.id == id;
        });
        data[index] = newData;
        setData(data);
        setInfo(newData);
        setLoader(true);
        navigate(-1);
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
            <div className="editLoader">
              {loader ? "Save Changes" : <BtnLoader />}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
