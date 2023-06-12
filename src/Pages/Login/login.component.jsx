import { BtnLoader } from "../../Components/BtnLoader/btnLoader.component";
import "../../Components/InvoiceForm/invoiceForm.scss";
import { useLoginProps } from "../../Hooks/useLoginProps";
import { hoc } from "../../Utils/hoc";
import "../OpenInvoiceUp/openInvoiceUp.scss";
import "./login.scss";

export const Login = hoc(
  useLoginProps,
  ({ onLogin, emailRef, passwordRef, loader }) => {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <form onSubmit={onLogin} className="form">
          <h3 className="mb-2">Login</h3>
          <div className="d-flex flex-column mt-3">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              required
              className="py-2 px-3"
              type="text"
              id="email"
              placeholder="email..."
            />
          </div>
          <div className="d-flex flex-column mt-3">
            <label className="mb-2" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              required
              className="py-2 px-3"
              type="text"
              id="password"
              placeholder="password..."
            />
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button className="login_btn">
              <div className="loginLoader">
                {loader ? "Login" : <BtnLoader />}
              </div>
            </button>
          </div>
        </form>
      </div>
    );
  }
);
