import style from './style.module.css'

export default function mostraProdutos({ produtos }) {
    
    return (
        <>
            {
                produtos.map((produto) => (

                    <div className={style.containerProdutos}>
                        <div>
                            <p><b>{produto.nome}</b></p>
                            <p>{produto.desc}</p>
                        </div>
                        <div className={style.valorr}>
                            <p>R$</p>
                            <p>{produto.valor},00</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}