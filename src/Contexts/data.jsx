import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://invoices-8ehs.onrender.com/invoices")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
