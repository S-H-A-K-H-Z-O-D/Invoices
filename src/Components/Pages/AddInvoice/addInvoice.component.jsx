import { Link } from "react-router-dom";

export const AddInvoice = () => {
  return (
    <>
      <Link to={"/edit-invoice"}>Edit</Link>
      <Link to={"/delete-invoice"}>Delete</Link>
      Add invoice
    </>
  );
};
