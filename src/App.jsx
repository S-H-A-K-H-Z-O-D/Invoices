import { Route, Routes } from "react-router-dom";
import {
  AddInvoice,
  DeleteInvoice,
  EditInvoice,
  Home,
  OpenInvoiceUp,
} from "./Components";
import { Layout } from "./Components/Layout";

function App() {
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
    </>
  );
}

export default App;
