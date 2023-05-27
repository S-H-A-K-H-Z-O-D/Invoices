import { Sidebar } from "../Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex h-100">
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
