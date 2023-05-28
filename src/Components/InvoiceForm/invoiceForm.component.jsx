import "./invoiceForm.scss";

export const InvoiceForm = () => {
  return (
    <form>
      <div className="d-flex flex-column">
        <label className="mb-1" htmlFor="name">
          Client's name
        </label>
        <input
          required
          className="py-1 px-3"
          id="name"
          type="text"
          placeholder="Ex: Alex Grim"
        />
      </div>
      <div className="d-flex flex-column mt-3">
        <label className="mb-1" htmlFor="name">
          Client’s Email
        </label>
        <input
          required
          className="py-1 px-3"
          id="name"
          type="text"
          placeholder="Ex: alexgrim@mail.com"
        />
      </div>

      <div className="d-flex mt-3">
        <div className="d-flex flex-column w-50 me-2">
          <label className="mb-1" htmlFor="name">
            Due Date
          </label>
          <input
            required
            className="py-1 px-3"
            id="name"
            type="text"
            placeholder="Ex: 20 Aug 2021"
          />
        </div>
        <div className="d-flex flex-column w-50 ms-3">
          <label className="mb-1" htmlFor="name">
            Payment Terms
          </label>
          <input
            required
            className="py-1 px-3"
            id="name"
            type="text"
            placeholder="Ex: Net 30 Days"
          />
        </div>
      </div>

      <div className="d-flex flex-column mt-3">
        <label className="mb-1" htmlFor="name">
          Project Description
        </label>
        <input
          required
          className="py-1 px-3"
          id="name"
          type="text"
          placeholder="Ex: Graphic Design"
        />
      </div>

      <div className="d-flex flex-column mt-3">
        <label className="mb-1" htmlFor="name">
          7800
        </label>
        <input
          required
          className="py-1 px-3"
          id="name"
          type="text"
          placeholder="Ex: Alex Grim"
        />
      </div>
    </form>
  );
};
