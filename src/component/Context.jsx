import React, { createContext, useContext, useState } from 'react';
import jsonData from '../component/data.json';

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [data, setData] = useState(jsonData.songs);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
