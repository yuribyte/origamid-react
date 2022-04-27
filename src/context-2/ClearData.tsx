import { isNil } from 'lodash';
import React from 'react';
import { GlobalContext } from './GlobalContext';

const ClearData = () => {
  const { clearData } = React.useContext(GlobalContext);
  if (isNil(clearData)) {
    return null;
  }
  return <button onClick={clearData}>clear</button>;
};

export default ClearData;
