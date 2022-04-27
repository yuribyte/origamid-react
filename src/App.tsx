import useLocalStorage from './customHooks/useLocalStorage';

const App = () => {
  const [data, setData] = useLocalStorage('data', null);

  const handleClick = async (event: {
    target: HTMLInputElement | EventTarget;
  }) => {
    const value = (event.target as HTMLTextAreaElement).innerText;
    setData(value);
  };

  function clearData() {
    setData(null);
  }

  const renderData = <span>{data ? data : ''}</span>;

  return (
    <div>
      <button onClick={handleClick}>notebok</button>
      <button onClick={handleClick}>asddsadasdsa</button>
      <button onClick={clearData}>clear</button>
      <h2>Current data: {renderData}</h2>
    </div>
  );
};

export default App;
