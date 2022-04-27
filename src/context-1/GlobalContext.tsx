import React, { useEffect } from 'react';

export const GlobalContext = React.createContext<any>(undefined);

export const GlobalStorage = ({ children }: any) => {
  const [dados, setDados] = React.useState<any>(0);

  useEffect(() => {
    setDados(1);
  }, []);

  function limparDados() {
    setDados(null);
  }

  function add() {
    setDados(() => dados + 1);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados, add }}>
      {children}
    </GlobalContext.Provider>
  );
};
