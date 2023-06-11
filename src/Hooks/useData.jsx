import { useContext } from "react";
import { DataContext } from "../Contexts/data";

export const useData = () => {
  const { data, id, setId, info, setInfo, setData } = useContext(DataContext);

  return [data, id, setId, info, setInfo, setData];
};
