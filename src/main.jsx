import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/auth.jsx";

import { store } from "./store/config-store";
import { DataProvider } from "./Contexts/data.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <DataProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </DataProvider>
    </AuthProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
