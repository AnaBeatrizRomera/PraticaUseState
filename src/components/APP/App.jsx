import styles from "./App.module.css";
import FormularioProduto from "../FormularioProduto/FormularioProduto";
import { useState } from "react";
import ListaEstoque from "../ListaEstoque/ListaEstoque";
function App() {
  const [valor, setValor] = useState(1000.00);
  const [produtos, setProdutos] = useState([]);
  const addProduto = (nome, quantidade, compra, venda) => {
    const produto = {
      id: Date.now(),
      name: nome,
      quant: quantidade,
      buy: compra,
      sold: venda
    };

    setValor((valor-(produto.quant*produto.buy)))
    setProdutos([...produtos, produto]);
  };
  const comprarProduto = (id) => {
    setProdutos(
      produtos.map((produto) => {
        return produto.id == id
          ? { ...produtos, quant: produto.quant + 1 }
          : produto;
      })
    );
  };
  const vendaProduto= (id) => {
    setProdutos(
      produtos.map((produto) => {
        return produto.id == id
          ? { ...produtos, quant: produto.quant - 1 }
          : produto;
      })
    );
  };
  return (
    <div className={styles.aplicativo}>
      <h1 className={styles.titulo}>Gerenciador de estoque</h1>
      <h2 className={styles.caixa}>Caixa: R${valor}</h2>
      <FormularioProduto addProduto={addProduto}/>
      <ListaEstoque produtos={produtos} comprarProduto={comprarProduto} vendaProduto={vendaProduto}/>

    </div>
  );
}

export default App;
