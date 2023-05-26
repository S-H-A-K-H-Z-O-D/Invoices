import "./buttons.scss";

export const Buttons = () => {
  return (
    <div className="d-flex align-items-center ms-auto">
      <div>
        <select className="filter" defaultValue="">
          <option value="" disabled>
            Filter by status
          </option>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
      </div>
      <div className="ms-4">
        <button className="add_btn d-flex align-items-center">
          <div className="el_btn me-3"></div>New invoice
        </button>
      </div>
    </div>
  );
};
