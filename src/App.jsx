import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { useAuth } from "./Hooks/useAuth";
import {
  AddInvoice,
  DeleteInvoice,
  EditInvoice,
  Home,
  Login,
  OpenInvoiceUp,
} from "./Pages";

function App() {
  const [token, , layout, setLayout] = useAuth();

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-invoice" element={<AddInvoice />} />
          <Route path="/open-invoice-up" element={<OpenInvoiceUp />} />
          <Route path="/edit-invoice" element={<EditInvoice />} />
          <Route path="/delete-invoice" element={<DeleteInvoice />} />
        </Routes>
      </Layout>
      {!layout ? (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : null}
    </>
  );
}

export default App;
