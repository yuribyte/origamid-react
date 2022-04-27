import { isNil } from 'lodash';
import React from 'react';
import { GlobalContext } from './GlobalContext';

const Data = () => {
  const { data } = React.useContext(GlobalContext);

  if (isNil(data)) {
    return null;
  }

  const renderDataList = (
    <ul>
      {data.map((item: any) => {
        return <li key={item.id}>{item.nome}</li>;
      })}
    </ul>
  );

  return <div>Items: {renderDataList}</div>;
};

export default Data;
