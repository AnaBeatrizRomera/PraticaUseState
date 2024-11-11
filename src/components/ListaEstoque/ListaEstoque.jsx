import styles from './ListaEstoque.module.css'
import ItemEstoque from '../ItemEstoque/ItemEstoque';
function ListaEstoque({produtos,comprarProduto,vendaProduto}){

    return(
        <div className={styles.listaEstoque}>
            <h2 className={styles.h2}>Estoque Atual</h2>
            {produtos.map((produto)=>
            <ItemEstoque key={produto.id} produto={produto} comprarProduto={comprarProduto} vendaProduto={vendaProduto}/>
            )}
        </div>
    )
}

export default ListaEstoque;