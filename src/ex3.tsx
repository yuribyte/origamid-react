import { useState } from 'react';

type Product = {
  id?: string;
  nome?: string;
  descricao?: string;
  src?: string;
  titulo?: string;
  preco?: number;
  usuario_id?: string;
  vendido?: boolean;
  fotos?: [
    {
      titulo?: string;
      src?: string;
    }
  ];
};

const Exercicio3 = () => {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async (event: {
    target: HTMLInputElement | EventTarget;
  }) => {
    const value = (event.target as HTMLTextAreaElement).innerText;

    setIsLoading(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${value}`
    );
    const data = await response.json();

    setData(data);
    setIsLoading(false);
  };

  const buttons = (
    <div className="buttons">
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
    </div>
  );

  const showProduct = (
    <>
      {!isLoading && data && (
        <div>
          <p>{data?.nome}</p>
          <img src={data?.fotos![0].src} alt={data?.nome} />
        </div>
      )}
    </>
  );

  const showLoadingMessage = <>{isLoading && <p>Carregando...</p>}</>;

  const product = (
    <>
      {showProduct}
      {showLoadingMessage}
    </>
  );

  return (
    <div>
      <h1>Exercicio3</h1>
      <h2>Click and choose an Item</h2>
      {buttons}
      {product}
    </div>
  );
};

export default Exercicio3;
