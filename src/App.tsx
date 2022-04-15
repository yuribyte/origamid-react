import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState<string[]>(['item1', 'item2', 'item3']);

  const createItem = () => {
    setItems([...items, 'item4']);
  };

  const removeItem = () => {
    items.pop();
    setItems([...items]);
  };

  const showItems = () => {
    return items.map((item, index) => {
      return <span key={index}>{item}</span>;
    });
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        <button onClick={createItem}>New item</button>
        <button onClick={removeItem}>remove item</button>
      </p>
      <p>{showItems()}</p>
    </div>
  );
}
