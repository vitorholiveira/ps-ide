import style from './style.module.css'
import MostraProdutos from './Produtos'

import { useState } from 'react'

export default function Produtos() {

    let [num, setNum] = useState(0)

    function criaProduto(nome, desc, valor) {
        return {
            nome,
            desc,
            valor
        }
    }

    const Copa = [
        criaProduto("Bandeirinhas",
            "Conjunto de Bandeirinhas.",
            12),
        criaProduto("Uniforme Seleção",
            "Uniforme da Seleção",
            70),
        criaProduto("Vuvuzela",
            "Pra fazer aquela barulheira dahora.",
            30),
        criaProduto("Peruca Colorida",
            "Peruca nas cores Verde e Amarelo.",
            25),
        criaProduto("Faixa 100% Jesus",
            "Faixa utilizada pelo Neymar.",
            5)]

    const Natal = [
        criaProduto("Árvore de Natal",
            "Árvore montável.",
            100),
        criaProduto("Gorro",
            "Gorro do Papai Noel",
            20),
        criaProduto("Caixa de Presente",
            "Para embrulhar um presente.",
            10),
        criaProduto("Luzes de Natal",
            "Luzes coloridas para colocar na Árvore de Natal.",
            25)]
    
    const AnoNovo = [
        criaProduto("Espumante",
            "Garrafa de Espumante.",
            45),
        criaProduto("Camisa Brancca",
            "Roupa masculina.",
            50),
        criaProduto("Vestido Branco",
            "Roupa feminina.",
            80)]

    const Abas = [Copa, Natal, AnoNovo]


    return (
        <div id="produtos" className={style.Produto}>
            <div className={style.titulo}>
                <p>PRODUTOS DISPONÍVEIS</p>
            </div>
            <div className={style.menu}>
                <button id="0" onClick={()=>setNum(0)}>Copa do Mundo</button><button id="1" onClick={()=>setNum(1)}>Natal</button><button id="2" onClick={()=>setNum(2)}>Ano Novo</button>
            </div>
            <MostraProdutos produtos={Abas[num]} />
        </div>
    )
}