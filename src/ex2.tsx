const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

function Exercicio2() {
  function setupColorListText(color: Array<string>) {
    return color.map((item) => {
      return (
        <li style={{ background: item }} key={item}>
          {item}
        </li>
      );
    });
  }

  const result = produtos
    .filter(({ preco }) => Number(preco.replace('R$', '')) >= 2000)
    .map((produto) => {
      const nameText = <h1>{produto.nome}</h1>;
      const priceText = <span>Preço: {produto.preco}</span>;
      const colorListText = <ul>{setupColorListText(produto.cores)}</ul>;
      return (
        <div key={produto.nome}>
          {nameText}
          {priceText}
          {colorListText}
        </div>
      );
    });

  return <div>{result}</div>;
}

export default Exercicio2;
