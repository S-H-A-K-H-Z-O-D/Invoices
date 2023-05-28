import { useContext } from "react";
import { DataContext } from "../Contexts/data";

export const useData = () => {
  const { data } = useContext(DataContext);

  return [data];
};
