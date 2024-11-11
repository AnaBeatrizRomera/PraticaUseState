import styles from "./FormularioProduto.module.css";
import { useState } from "react";
function FormularioProduto({ addProduto }) {
  const [valueP, setValueP] = useState("");
  const [valueE, setValuE] = useState("");
  const [valueC, setValueC] = useState("");
  const [valueV, setValueV] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (valueP.trim() && valueE.trim() && valueC.trim() && valueV.trim()) {
      addProduto(valueP, valueE, valueC, valueV);
      setValueP("");
      setValuE("");
      setValueC("");
      setValueV("");
    }
  };
  return (
    <div className={styles.formulario}>
      <label htmlFor="" className={styles.label}>
        Nome do Produto:
      </label>
      <input
        type="text"
        name="produto"
        id="produto"
        className={styles.input}
        onChange={(event) => setValueP(event.target.value)}
      />
      <label htmlFor="" className={styles.label}>
        Quantidade de Estoque:
      </label>
      <input
        type="text"
        name="estoque"
        id="estoque"
        className={styles.input}
        onChange={(event) => setValuE(event.target.value)}
      />
      <label htmlFor="" className={styles.label}>
        Valor da Compra:
      </label>
      <input
        type="text"
        name="compra"
        id="compra"
        className={styles.input}
        onChange={(event) => setValueC(event.target.value)}
      />
      <label htmlFor="" className={styles.label}>
        Valor de Venda:
      </label>
      <input
        type="text"
        name="venda"
        id="venda"
        className={styles.input}
        onChange={(event) => setValueV(event.target.value)}
      />
      <button className={styles.botao} onClick={handleSubmit}>
        Adicionar Produto
      </button>
    </div>
  );
}

export default FormularioProduto;
