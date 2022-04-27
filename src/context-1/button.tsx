import React from 'react';
import { GlobalContext } from './GlobalContext';

const Button = () => {
  const { add } = React.useContext(GlobalContext);
  return <button onClick={add}>add</button>;
};

export default Button;
