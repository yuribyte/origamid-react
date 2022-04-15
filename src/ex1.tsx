import { useState } from 'react';

const cliente1 = {
  nome: 'Cliente 1',
  idade: 21,
  ativo: true,
  compras: [
    { nome: 'notebook', preco: 'R$ 2500' },
    { nome: 'celular', preco: 'R$ 1500' },
    { nome: 'geladeira', preco: 'R$ 3200' },
  ],
};
const cliente2 = {
  nome: 'Cliente 2',
  idade: 32,
  ativo: false,
  compras: [
    { nome: 'moto', preco: 'R$ 12500' },
    { nome: 'video-game', preco: 'R$ 3500' },
  ],
};

function Exercicio1() {
  const [dados, setDados] = useState(cliente1);
  const isActive = dados.ativo;

  const toggleClient = () => {
    setDados(() => (!isActive ? cliente1 : cliente2));
  };

  const situacaoText = () => {
    const style = isActive ? 'green' : 'red';
    const text = isActive ? 'Ativo' : 'Inativo';

    return <span style={{ color: style }}>{text}</span>;
  };

  const totalValue = () => {
    return dados.compras
      .map((compras) => Number(compras.preco.replace('R$', '')))
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  };

  const hasBigValue = () => {
    return totalValue() > 10000 && <p>Voce esta gastando muito</p>;
  };

  return (
    <div>
      <p>
        <button onClick={toggleClient}>Trocar cliente</button>
      </p>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: {situacaoText()}</p>
      <p>Total: R$ {totalValue()}</p>
      {hasBigValue()}
    </div>
  );
}

export default Exercicio1;
