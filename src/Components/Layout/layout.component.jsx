import { Sidebar } from "../Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex h-100">
      <Sidebar />
      <div className="w-100">{children}</div>
    </div>
  );
};
