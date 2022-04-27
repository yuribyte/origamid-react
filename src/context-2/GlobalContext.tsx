import { isNil } from 'lodash';
import React, { useState } from 'react';

export const GlobalContext = React.createContext<any>(undefined);

export const GlobalStorage = ({ children }: any) => {
  const [data, setData] = useState<any>(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function addData() {
    if (isNil(data)) {
      fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }

  function clearData() {
    setData(null);
  }

  return (
    <GlobalContext.Provider value={{ data, addData, clearData }}>
      {children}
    </GlobalContext.Provider>
  );
};
