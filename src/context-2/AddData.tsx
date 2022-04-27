import { isNil } from 'lodash';
import React from 'react';
import { GlobalContext } from './GlobalContext';

const AddData = () => {
  const { addData } = React.useContext(GlobalContext);
  if (isNil(addData)) {
    return null;
  }
  return (
    <button style={{ marginRight: '15px' }} onClick={addData}>
      add
    </button>
  );
};

export default AddData;
