import { useEffect } from "react";
import { useState } from "react";
import { useData } from "../../../Hooks/useData";
import "./invoiceWindow.scss";

export const InvoiceWindow = () => {
  const [, , , info] = useData();

  return (
    <>
      <div className="p-5 blank">
        <div>
          <h5 className="blank__code">
            <span>#</span>XM9141
          </h5>
          <p>Graphic Design</p>
        </div>
        <div className="d-flex jusify-content-between flex-wrap blank__info">
          <div className="w-25 me-5 mt-4">
            <p>Invoice Date</p>
            <h5 className="fw-bold">{info?.createdDate}</h5>
          </div>
          <div className="w-25 me-5 mt-4">
            <p>Bill To</p>
            <h5 className="fw-bold">{info?.to}</h5>
          </div>
          <div className="w-25 me-5 mt-4">
            <p>Sent to</p>
            <h5 className="fw-bold">{info?.email}</h5>
          </div>
          <div className="w-25 me-5 mt-4">
            <p>Payment Due</p>
            <h5 className="fw-bold">{info?.dueDate}</h5>
          </div>
        </div>

        <div className="blank__money d-flex justify-content-between align-items-center">
          <p className="blank__money__text">Amount Due</p>
          <p className="blank__money__amount">
            <span>£</span> {info?.price}
          </p>
        </div>
      </div>
    </>
  );
};
