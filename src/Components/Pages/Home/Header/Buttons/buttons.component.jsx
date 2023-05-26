import { Link } from "react-router-dom";

export const Buttons = () => {
  return (
    <div className="ms-auto">
      <div>
        <select defaultValue="">
          <option value="" disabled>
            Filter by status
          </option>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
      </div>
      <div>
        <button>
          <Link to={"/add-invoice"}>Add</Link>
        </button>
      </div>
    </div>
  );
};
