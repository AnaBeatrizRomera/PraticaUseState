import styles from './ItemEstoque.module.css'
import { useState } from "react";
function ItemEstoque({produto,comprarProduto,vendaProduto}){

    return(
        <div className={styles.produtoItem}>
            <p className={styles.nomeProduto}>{produto.name}</p>
            <p className={styles.quantidadeProduto}>{produto.quant}</p>
            <p className={styles.valorProduto}>R${produto.sold}</p>
            <button className={styles.botaoComprar} onClick={()=>{
                comprarProduto(produto.id)
            }}>+</button>
            <button className={styles.botaoVender} >-</button>
        </div>
    )
}

export default ItemEstoque;