import { createContext, useContext, useState } from "react";
import jsonData from "../component/data.json";

const DataContext = createContext();

export const useData = () => useContext(DataContext); // Named export for useData

const DataProvider = ({ children }) => {
  const [data, setData] = useState(jsonData.songs || []);
  const [desktop,setDesktop] = useState(data.slice(0, 5))
  const [mobile,setMobile] = useState(data.slice(0, 3))

  // const desktop = data.slice(0, 5);
  // const mobile = data.slice(0, 3);

  return (
    <DataContext.Provider value={{ data, setData, desktop,setDesktop, mobile ,setMobile}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
