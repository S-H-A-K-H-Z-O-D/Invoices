import { forwardRef } from "react";
import "./invoiceForm.scss";

export const Input = forwardRef(({ id, type, className }, ref) => {
  return (
    <div className={className}>
      <label className="mb-1" htmlFor={id}>
        Client's name
      </label>
      <input
        ref={ref}
        required
        className="py-1 px-3"
        id={id}
        type={type}
        placeholder="Ex: Alex Grim"
      />
    </div>
  );
});
