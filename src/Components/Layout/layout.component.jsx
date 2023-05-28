import { useAuth } from "../../Hooks/useAuth";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children }) => {
  const [, , layout] = useAuth();

  return (
    <div className={layout ? "d-flex h-100" : "d-none"}>
      <Sidebar />
      <div
        style={{ padding: "50px 280px", paddingRight: "360px" }}
        className="w-100"
      >
        {children}
      </div>
    </div>
  );
};
