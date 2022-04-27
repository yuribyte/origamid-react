import { isNil } from 'lodash';
import { useEffect, useState } from 'react';

export default function Exercicio3() {
  return <AppProduto />;
}

function AppProduto() {
  const [product, setProduct] = useState<string | null>(null);

  useEffect(() => {
    const localProduct = window.localStorage.getItem('product');
    if (!isNil(localProduct)) {
      setProduct(localProduct);
    }
  }, []);

  useEffect(() => {
    if (!isNil(product)) {
      window.localStorage.setItem('product', product);
    }
  }, [product]);

  function handleProductName({ target }: any) {
    setProduct(target.innerText);
  }

  const titleLayout = <h1>Preferência: {product}</h1>;
  const buttonLayout = (
    <div>
      <button onClick={handleProductName} style={{ marginRight: '0.5rem' }}>
        notebook
      </button>
      <button onClick={handleProductName} style={{ marginLeft: '0.5rem' }}>
        smartphone
      </button>
    </div>
  );

  return (
    <div>
      {titleLayout}
      {buttonLayout}
      <Product product={product} />
    </div>
  );
}

function Product({ product }: { product?: string | null }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!isNil(product)) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [product]);

  if (isNil(data)) {
    return null;
  }

  return (
    <div>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
    </div>
  );
}
