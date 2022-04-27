import React from 'react';
import { GlobalContext } from './GlobalContext';

const Count = () => {
  const { dados } = React.useContext(GlobalContext);

  console.log(dados);
  if (dados == null) return null;

  return <div>contador: {dados}</div>;
};

export default Count;
